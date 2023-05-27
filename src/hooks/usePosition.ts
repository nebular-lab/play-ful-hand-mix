import { useRecoilCallback } from 'recoil';

import { positionState } from '@/store';
import { PositionType } from '@/types';

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
