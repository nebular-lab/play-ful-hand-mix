import { suitType } from '@/types';

export const getGridNum = (suit: suitType) => {
  switch (suit) {
    case 'pair':
      return 6;
    case 'suited':
      return 4;
    case 'offsuited':
      return 12;
  }
};
