/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { produce } from 'immer';
import _ from 'lodash';
import { useRecoilCallback } from 'recoil';

import { deletedHandRange } from '@/lib/deletedHandRange';
import { allDrawedRange } from '@/lib/drawAllRange';
import { getCardnode } from '@/lib/getCardNode';
import { getHandRange } from '@/lib/getHandRange';
import { getMoves } from '@/lib/getMoves';
import { getNextHandRange } from '@/lib/getNextHandRange';
import { handNodeState, nodePathState } from '@/store';
import {
  ActionNodeType,
  ActionType,
  CardNodeType,
  CardType,
  HandRangeSchema,
  MoveType,
  PairHandRangeType,
  PositionNodeType,
  PositionType,
  StreetNodeType,
} from '@/types';

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
          const isFirstCard = streetNode.child?.length ? false : true;
          const OOPHandRange = HandRangeSchema.parse(streetNode.handRanges.OOP);
          const IPHandRange = HandRangeSchema.parse(streetNode.handRanges.IP);
          const cardNode = getCardnode(
            OOPHandRange,
            IPHandRange,
            addCards,
            boardCards,
            isFirstCard,
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
            const { actionNode } = getNextState(
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
        // 一旦全部非表示にする
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
        // 選択したノードを表示にする
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

  const selectBoard = useRecoilCallback(
    ({ snapshot, set }) =>
      (path: (number | string)[]) => {
        const handNode = snapshot.getLoadable(handNodeState).getValue();
        const noSelectedNode = produce(handNode, (draft) => {
          let current: any = draft;
          const lastDeletedPath = _.dropRight(path, 2);
          lastDeletedPath.forEach((path) => {
            current = current[path];
          });
          //この時点でcurrentはStreetNode
          const streetNode: StreetNodeType = current;
          streetNode.child?.forEach((cardNode) => {
            cardNode.isSelected = false;
            cardNode.isDisplay = false;
          });
        });
        const nextState = produce(noSelectedNode, (draft) => {
          let current: any = draft;
          path.forEach((path) => {
            current = current[path];
          });
          //この時点でcurrentはCardNode
          const cardNode: CardNodeType = current;
          cardNode.isSelected = true;
          cardNode.isDisplay = true;
        });
        set(handNodeState, nextState);
      },
    [],
  );

  const resetIsDisplay = useRecoilCallback(
    ({ snapshot, set }) =>
      (path: (number | string)[]) => {
        const handNode = snapshot.getLoadable(handNodeState).getValue();
        const nextState = produce(handNode, (draft) => {
          let current: any = draft;
          path.forEach((path) => {
            current = current[path];
          });
          //この時点でcurrentはpositionNode
          const positionNode: PositionNodeType = current;
          positionNode.child?.forEach((actionNode) => {
            actionNode.isDisplay = true;
            actionNode.isSelected = false;
          });
        });
        set(handNodeState, nextState);
      },
    [],
  );

  return {
    addStreetCard,
    registerHandRange,
    selectAction,
    selectBoard,
    resetIsDisplay,
  };
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
        OOP: allDrawedRange([{ move: 'CHECK', percent: 100 }], handRanges.OOP),
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
        OOP: allDrawedRange([{ move: 'CHECK', percent: 100 }], handRanges.OOP),
        IP: allDrawedRange([{ move: 'CHECK', percent: 100 }], handRanges.IP),
      },
    };
    nextPosition = 'OOP';
  } else if (move === 'CALL' && position == 'OOP') {
    actionNode.child = {
      type: 'StreetNode',
      board: board,
      handRanges: {
        OOP: allDrawedRange([{ move: 'CHECK', percent: 100 }], handRanges.OOP),
        IP: allDrawedRange([{ move: 'CHECK', percent: 100 }], handRanges.IP),
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
        OOP: allDrawedRange([{ move: 'CHECK', percent: 100 }], handRanges.OOP),
        IP: allDrawedRange([{ move: 'CHECK', percent: 100 }], handRanges.IP),
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
        OOP: allDrawedRange([{ move: 'CHECK', percent: 100 }], handRanges.OOP),
        IP: allDrawedRange([{ move: 'FOLD', percent: 100 }], handRanges.IP),
      };
    } else if (move == 'ALLIN') {
      actions = [
        { move: 'CALL', percent: 100 },
        { move: 'FOLD', percent: 0 },
      ];
      nextHandRanges = {
        OOP: allDrawedRange([{ move: 'CHECK', percent: 100 }], handRanges.OOP),
        IP: allDrawedRange([{ move: 'FOLD', percent: 100 }], handRanges.IP),
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
        OOP: allDrawedRange([{ move: 'CHECK', percent: 100 }], handRanges.OOP),
        IP: allDrawedRange([{ move: 'CHECK', percent: 100 }], handRanges.IP),
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
        OOP: allDrawedRange([{ move: 'FOLD', percent: 100 }], handRanges.OOP),
        IP: allDrawedRange([{ move: 'CHECK', percent: 100 }], handRanges.IP),
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
