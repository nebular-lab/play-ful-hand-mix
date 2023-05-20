import { updatedDrawActions } from '@/lib/updatedDrawActions';
import { drawActionsState } from '@/store';
import { ActionType, HandActionsType } from '@/types';
import { useRecoilCallback } from 'recoil';

// いらないかも
export const useDrawActions = () => {
  const setDrawActions = useRecoilCallback(
    ({ snapshot, set }) =>
      (inputAction: ActionType) => {
        const drawActions = snapshot.getLoadable(drawActionsState).getValue();
        set(drawActionsState, updatedDrawActions(drawActions, inputAction));
      },
    [],
  );
  return { setDrawActions };
};
