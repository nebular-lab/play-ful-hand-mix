import { cardStrings } from '@/const';
import { CardNumType, suitType } from '@/types';

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

export const getCardNumsFromIndex = (
  row: number,
  col: number,
  suit: suitType,
): CardNumType[] => {
  switch (suit) {
    case 'pair':
      return [cardStrings[row], cardStrings[col]];
    case 'suited':
      return [cardStrings[row], cardStrings[col]];
    case 'offsuited':
      return [cardStrings[col], cardStrings[row]];
  }
};
