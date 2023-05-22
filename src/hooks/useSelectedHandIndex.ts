import { selectedHandIndexState } from '@/store';
import { useRecoilCallback } from 'recoil';

export const useSelectedHandIndex = () => {
  const setSelectedHandIndex = useRecoilCallback(
    ({ set }) =>
      (index: { row: number; col: number } | null) => {
        set(selectedHandIndexState, index);
      },
  );
  return { setSelectedHandIndex };
};
