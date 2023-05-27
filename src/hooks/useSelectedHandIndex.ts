import { useRecoilCallback } from 'recoil';

import { selectedHandIndexState } from '@/store';

export const useSelectedHandIndex = () => {
  const setSelectedHandIndex = useRecoilCallback(
    ({ set }) =>
      (index: { row: number; col: number } | null) => {
        set(selectedHandIndexState, index);
      },
    [],
  );
  return { setSelectedHandIndex };
};
