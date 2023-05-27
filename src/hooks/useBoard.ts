import { useRecoilCallback } from 'recoil';

import { boardState } from '@/store';
import { CardType } from '@/types';

export const useBoard = () => {
  const setBoard = useRecoilCallback(
    ({ set }) =>
      (board: CardType[]) => {
        set(boardState, board);
      },
    [],
  );
  return { setBoard };
};
