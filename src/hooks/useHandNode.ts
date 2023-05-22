import { getCardnode } from '@/lib/getCardNode';
import { handNodeState, handRangeState, nodePathState } from '@/store';
import _ from 'lodash';
import {
  ActionNodeType,
  ActionType,
  CardType,
  HandRangeSchema,
  HandRangeType,
  MoveType,
  PairHandRangeType,
  PositionNodeType,
  PositionType,
  StreetNodeType,
} from '@/types';
import { produce } from 'immer';
import { useRecoilCallback } from 'recoil';
import { useHandRange } from './useHandRange';
import { deletedHandRange } from '@/lib/deletedHandRange';
import { getNextHandRange } from '@/lib/getNextHandRange';
import { defaultHandNode, defaultHandRange } from '@/const';
import { getHandRange } from '@/lib/getHandRange';
import { getMoves } from '@/lib/getMoves';
import next from 'next/types';
import { drawAllRange } from '@/lib/drawAllRange';

export const useHandNode = () => {
  const addStreetCard = useRecoilCallback(
    ({ snapshot, set }) =>
      (boardCards: CardType[], addCards: CardType[]) => {
        const handNode = snapshot.getLoadable(handNodeState).getValue();
        const nodePath = snapshot.getLoadable(nodePathState).getValue();
        const nextState = produce(handNode, (draft) => {
          let current: any = draft;
          nodePath.forEach((path) => {
            current = current[path];
          });
          //この時点でcurrentはstreetNode
          const streetNode: StreetNodeType = current;
          const OOPHandRange = HandRangeSchema.parse(streetNode.handRanges.OOP);
          const IPHandRange = HandRangeSchema.parse(streetNode.handRanges.IP);
          const cardNode = getCardnode(
            OOPHandRange,
            IPHandRange,
            addCards,
            boardCards,
          );
          if (!streetNode['child']) streetNode['child'] = [];
          streetNode.child.push(cardNode);
        });
        set(handNodeState, nextState);
      },
    [],
  );

  const registerHandRange = useRecoilCallback(
    ({ snapshot, set }) =>
      (
        position: PositionType,
        board: CardType[],
        handRanges: PairHandRangeType,
      ) => {
        const handNode = snapshot.getLoadable(handNodeState).getValue();
        const nodePath = snapshot.getLoadable(nodePathState).getValue();
        const handRange = getHandRange(snapshot);
        const nextState = produce(handNode, (draft) => {
          let current: any = draft;
          nodePath.forEach((path) => {
            current = current[path];
          });
          //この時点でcurrentはPositionNode
          const positionNode: PositionNodeType = current;
          positionNode.handRanges = {
            ...positionNode.handRanges,
            [position]: handRange,
          };
          const moves = getMoves(snapshot);
          const actionNodes: ActionNodeType[] = [];
          moves.forEach((move) => {
            if (move === 'FOLD') return;
            // 仮に全部CHECKに設定
            const nextHandRange = getNextHandRange(handRange, move);
            const deletedNextHandRange = deletedHandRange(nextHandRange, board);
            const { actionNode, nextPosition } = getNextState(
              { ...handRanges, [position]: deletedNextHandRange },
              move,
              position,
              board,
            );
            actionNodes.push(actionNode);
          });
          positionNode.child = actionNodes;
        });
        set(handNodeState, nextState);
      },
    [],
  );

  const selectAction = useRecoilCallback(
    ({ snapshot, set }) =>
      (path: (number | string)[]) => {
        const handNode = snapshot.getLoadable(handNodeState).getValue();
        const noSelectedNode = produce(handNode, (draft) => {
          let current: any = draft;
          const lastDeletedPath = _.dropRight(path, 2);
          lastDeletedPath.forEach((path) => {
            current = current[path];
          });
          //この時点でcurrentはPositionNode
          const positionNode: PositionNodeType = current;
          positionNode.child?.forEach((actionNode) => {
            actionNode.isSelected = false;
            actionNode.isDisplay = false;
          });
        });
        const nextState = produce(noSelectedNode, (draft) => {
          let current: any = draft;
          path.forEach((path) => {
            current = current[path];
          });
          //この時点でcurrentはActionNode
          const actionNode: ActionNodeType = current;
          actionNode.isSelected = true;
          actionNode.isDisplay = true;
        });

        set(handNodeState, nextState);
      },
    [],
  );

  return { addStreetCard, registerHandRange, selectAction };
};

const getNextState = (
  handRanges: PairHandRangeType,
  move: MoveType,
  position: PositionType,
  board: CardType[],
) => {
  const actionNode: ActionNodeType = {
    move,
    isDisplay: true,
    isSelected: false,
  };
  let nextPosition: PositionType;
  if (move === 'PREFLOP' && position === 'OOP') {
    actionNode.isSelected = true;
    actionNode.child = {
      type: 'PositionNode',
      position: 'IP',
      actions: [
        { move: 'PREFLOP', percent: 100 },
        { move: 'FOLD', percent: 0 },
      ],
      board: [],
      handRanges: {
        OOP: drawAllRange('CHECK', handRanges.OOP),
        IP: handRanges.IP,
      },
    };
    nextPosition = 'IP';
  } else if (move === 'PREFLOP' && position === 'IP') {
    actionNode.isSelected = true;
    actionNode.child = {
      type: 'StreetNode',
      board: [],
      handRanges: {
        OOP: drawAllRange('CHECK', handRanges.OOP),
        IP: drawAllRange('CHECK', handRanges.IP),
      },
    };
    nextPosition = 'OOP';
  } else if (move === 'CALL' && position == 'OOP') {
    actionNode.child = {
      type: 'StreetNode',
      board: board,
      handRanges: {
        OOP: drawAllRange('CHECK', handRanges.OOP),
        IP: drawAllRange('CHECK', handRanges.IP),
      },
    };
    nextPosition = 'OOP';
  } else if (position == 'OOP') {
    let actions: ActionType[] = [];
    let nextHandRanges: PairHandRangeType = handRanges;
    if (move === 'CHECK') {
      actions = [
        { move: 'ALLIN', percent: 0 },
        { move: 'BET L', percent: 0 },
        { move: 'BET M', percent: 0 },
        { move: 'BET S', percent: 100 },
        { move: 'CHECK', percent: 0 },
      ];
      nextHandRanges = {
        OOP: drawAllRange('CHECK', handRanges.OOP),
        IP: drawAllRange('CHECK', handRanges.IP),
      };
    } else if (
      move == 'BET L' ||
      move == 'BET M' ||
      move == 'BET S' ||
      move == 'RAISE'
    ) {
      actions = [
        { move: 'ALLIN', percent: 0 },
        { move: 'RAISE', percent: 0 },
        { move: 'CALL', percent: 100 },
        { move: 'FOLD', percent: 0 },
      ];
      nextHandRanges = {
        OOP: drawAllRange('CHECK', handRanges.OOP),
        IP: drawAllRange('FOLD', handRanges.IP),
      };
    } else if (move == 'ALLIN') {
      actions = [
        { move: 'CALL', percent: 100 },
        { move: 'FOLD', percent: 0 },
      ];
      nextHandRanges = {
        OOP: drawAllRange('CHECK', handRanges.OOP),
        IP: drawAllRange('FOLD', handRanges.IP),
      };
    }
    actionNode.child = {
      type: 'PositionNode',
      position: 'IP',
      actions: actions,
      board: board,
      handRanges: nextHandRanges,
    };
    nextPosition = 'IP';
  } else if (position == 'IP' && (move == 'CALL' || move == 'CHECK')) {
    actionNode.child = {
      type: 'StreetNode',
      board: board,
      handRanges: {
        OOP: drawAllRange('CHECK', handRanges.OOP),
        IP: drawAllRange('CHECK', handRanges.IP),
      },
    };
    nextPosition = 'OOP';
  } else if (
    position == 'IP' &&
    (move == 'ALLIN' ||
      move == 'BET L' ||
      move == 'BET M' ||
      move == 'BET S' ||
      move == 'RAISE')
  ) {
    let actions: ActionType[] = [];
    if (move === 'ALLIN') {
      actions = [
        { move: 'CALL', percent: 100 },
        { move: 'FOLD', percent: 0 },
      ];
    } else if (
      move === 'BET L' ||
      move === 'BET M' ||
      move === 'BET S' ||
      move === 'RAISE'
    ) {
      actions = [
        { move: 'ALLIN', percent: 0 },
        { move: 'RAISE', percent: 0 },
        { move: 'CALL', percent: 100 },
        { move: 'FOLD', percent: 0 },
      ];
    }
    actionNode.child = {
      type: 'PositionNode',
      position: 'OOP',
      actions: actions,
      board: board,
      handRanges: {
        OOP: drawAllRange('FOLD', handRanges.OOP),
        IP: drawAllRange('CHECK', handRanges.IP),
      },
    };
    nextPosition = 'OOP';
  } else {
    actionNode.child = {
      type: 'StreetNode',
      board: board,
      handRanges: handRanges,
    };
    nextPosition = 'OOP';
  }

  return { actionNode, nextPosition };
};
