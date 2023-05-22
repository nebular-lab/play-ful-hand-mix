import { suitType } from '@/types';

export const getSuitFromIndex = (row: number, col: number): suitType => {
  if (row === col) {
    return 'pair';
  } else if (row > col) {
    return 'offsuited';
  } else {
    return 'suited';
  }
};
