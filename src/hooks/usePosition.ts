import { positionState } from '@/store';
import { PositionType } from '@/types';
import { useRecoilCallback } from 'recoil';

export const usePosition = () => {
  const setPosition = useRecoilCallback(
    ({ set }) =>
      (position: PositionType) => {
        set(positionState, position);
      },
    [],
  );
  return { setPosition };
};
