import { hoveredHandIndexState } from '@/store';
import { useRecoilCallback } from 'recoil';

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
