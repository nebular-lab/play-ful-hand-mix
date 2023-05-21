import { boardState } from '@/store';
import { CardType } from '@/types';
import { useRecoilCallback } from 'recoil';

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
