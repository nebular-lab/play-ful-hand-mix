import { drawActionsState } from '@/store';
import { ActionType, HandActionsType } from '@/types';
import { useRecoilCallback } from 'recoil';

// いらないかも
export const useDrawActions = () => {
  const setDrawActions = useRecoilCallback(
    ({ set }) =>
      (actions: HandActionsType) => {
        set(drawActionsState, actions);
      },
    [],
  );
  return { setDrawActions };
};
