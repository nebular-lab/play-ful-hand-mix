import { useRecoilCallback } from 'recoil';

import { hoveredHandIndexState } from '@/store';

export const useHoveredHandIndex = () => {
  const setHoveredHandIndex = useRecoilCallback(
    ({ set }) =>
      (index: { row: number; col: number }) => {
        set(hoveredHandIndexState, index);
      },
    [],
  );
  return { setHoveredHandIndex };
};
