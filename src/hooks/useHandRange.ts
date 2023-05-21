import { sumActionPercent } from '@/lib/sumActionPercent';
import { drawActionsState, handRangeState } from '@/store';
import { produce } from 'immer';
import { useRecoilCallback } from 'recoil';

export const useHandRange = () => {
  const drawMatrix = useRecoilCallback(
    ({ snapshot, set }) =>
      (row: number, col: number) => {
        const handRange = snapshot
          .getLoadable(handRangeState({ row, col }))
          .getValue();
        const drawActions = snapshot.getLoadable(drawActionsState).getValue();
        const updatedHandRange = produce(handRange, (draft) => {
          draft.hands.forEach((hand) => {
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
  return { drawMatrix };
};
