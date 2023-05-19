
import { drawActionsState, handRangeState } from '@/store';
import { produce } from 'immer';
import { useRecoilCallback, useRecoilValue } from 'recoil';

export const useHandRange = () => {
  // const handRange = useRecoilValue(handRangeState);
  const drawMatrix = useRecoilCallback(
    ({ snapshot, set }) =>
      (row: number, col: number) => {
        const handRange = snapshot.getLoadable(handRangeState({ row, col })).getValue();
        const drawActions = snapshot.getLoadable(drawActionsState).getValue();
        const updatedHandRange = produce(handRange, (draft) => {
          draft.hands.forEach((hand) => {
            hand.actions = drawActions.actions;
          });
        });
        set(handRangeState({ row, col }), updatedHandRange);
      },
    [],
  );
  return { drawMatrix };
};
