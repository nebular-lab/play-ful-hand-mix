import { produce } from 'immer';
import { useRecoilCallback } from 'recoil';

import { cardArrayIndex } from '@/lib/convertCard';
import { allDrawedRange } from '@/lib/drawAllRange';
import { getHandRange } from '@/lib/getHandRange';
import { getSuitFromIndex } from '@/lib/getSuitFromIndex';
import { sumActionPercent } from '@/lib/sumActionPercent';
import { drawActionsState, handRangeState, includeSuitState } from '@/store';
import { HandRangeType } from '@/types';

export const useHandRange = () => {
  const drawMatrix = useRecoilCallback(
    ({ snapshot, set }) =>
      (row: number, col: number) => {
        const handRange = snapshot
          .getLoadable(handRangeState({ row, col }))
          .getValue();
        const drawActions = snapshot.getLoadable(drawActionsState).getValue();
        const includeSuit = snapshot.getLoadable(includeSuitState).getValue();
        const suit = getSuitFromIndex(row, col);
        const drawArrayIndex = includeSuit
          .map(([mark, isSelect]) => {
            if (isSelect) {
              return cardArrayIndex(suit, mark, false, true);
            } else {
              return [];
            }
          })
          .flat();
        const uniqueDrawArrayIndex = Array.from(new Set(drawArrayIndex));
        const updatedHandRange = produce(handRange, (draft) => {
          draft.hands.forEach((hand, handIndex) => {
            if (!uniqueDrawArrayIndex.includes(handIndex)) return;
            const maxPercent = sumActionPercent(hand.actions);
            hand.actions = drawActions.map((action) => {
              return {
                move: action.move,
                percent: (action.percent * maxPercent) / 100,
              };
            });
          });
        });
        set(handRangeState({ row, col }), updatedHandRange);
      },
    [],
  );

  const drawHand = useRecoilCallback(
    ({ snapshot, set }) =>
      (row: number, col: number, handIndex: number) => {
        const handRange = snapshot
          .getLoadable(handRangeState({ row, col }))
          .getValue();
        const drawActions = snapshot.getLoadable(drawActionsState).getValue();
        const updatedHandRange = produce(handRange, (draft) => {
          const maxPercent = sumActionPercent(
            handRange.hands[handIndex].actions,
          );
          draft.hands[handIndex].actions = drawActions.map((action) => {
            return {
              move: action.move,
              percent: (action.percent * maxPercent) / 100,
            };
          });
        });
        set(handRangeState({ row, col }), updatedHandRange);
      },
    [],
  );

  const setHandRange = useRecoilCallback(
    ({ set }) =>
      (handRange: HandRangeType) => {
        handRange.forEach((row, rowIndex) => {
          row.forEach((col, colIndex) => {
            set(handRangeState({ row: rowIndex, col: colIndex }), col);
          });
        });
      },
    [],
  );
  const drawAllRange = useRecoilCallback(
    ({ snapshot }) =>
      () => {
        const handRange = getHandRange(snapshot);
        const drawActions = snapshot.getLoadable(drawActionsState).getValue();
        setHandRange(allDrawedRange(drawActions, handRange));
      },
    [],
  );

  return { drawMatrix, setHandRange, drawAllRange, drawHand };
};
