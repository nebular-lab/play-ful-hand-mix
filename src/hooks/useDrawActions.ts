import { updatedDrawActions } from '@/lib/updatedDrawActions';
import { drawActionsState } from '@/store';
import { ActionType, MoveType } from '@/types';
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
  const resetDrawActions = useRecoilCallback(
    ({ set }) =>
      (actions: ActionType[]) => {
        set(drawActionsState, actions);
      },
    [],
  );

  return { setDrawActions,resetDrawActions };
};
