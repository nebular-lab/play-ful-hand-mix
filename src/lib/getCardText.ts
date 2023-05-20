import { cardStrings } from '@/const';
import { suitType } from '@/types';

export const getCardText = (row: number, col: number, suit: suitType) => {
  switch (suit) {
    case 'pair':
      return `${cardStrings[row]}${cardStrings[col]}`;
    case 'suited':
      return `${cardStrings[row]}${cardStrings[col]}s`;
    case 'offsuited':
      return `${cardStrings[col]}${cardStrings[row]}o`;
  }
};
