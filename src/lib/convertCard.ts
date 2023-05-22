import { CardMarkType, CardType, suitType } from '@/types';

type CardValueMap = {
  [key in
    | 'A'
    | 'K'
    | 'Q'
    | 'J'
    | 'T'
    | '9'
    | '8'
    | '7'
    | '6'
    | '5'
    | '4'
    | '3'
    | '2']: number;
};

export function convertCardValue(card: keyof CardValueMap) {
  const cardValues = {
    A: 0,
    K: 1,
    Q: 2,
    J: 3,
    T: 4,
    '9': 5,
    '8': 6,
    '7': 7,
    '6': 8,
    '5': 9,
    '4': 10,
    '3': 11,
    '2': 12,
  };

  return cardValues[card];
}
type SuitMap = {
  [key in 's' | 'h' | 'd' | 'c']: number;
};
const suitValues: SuitMap = {
  s: 0,
  h: 1,
  d: 2,
  c: 3,
};
export function convertSuit(suit: keyof SuitMap): number {
  return suitValues[suit];
}

export const cardArrayIndex = (
  suit: suitType,
  mark: CardMarkType,
  isRow: boolean,
  isBoth: boolean,
) => {
  if (suit === 'suited') {
    switch (mark) {
      case 's':
        return [0];
      case 'h':
        return [1];
      case 'd':
        return [2];
      case 'c':
        return [3];
      default:
        return [];
    }
  } else if (suit === 'pair') {
    switch (mark) {
      case 's':
        return [0, 1, 3];
      case 'h':
        return [0, 2, 4];
      case 'd':
        return [1, 2, 5];
      case 'c':
        return [3, 4, 5];
      default:
        return [];
    }
  } else {
    // offsuited
    switch (mark) {
      case 's':
        if (isBoth) {
          return [0, 1, 2, 3, 6, 9];
        } else if (isRow) {
          return [0, 1, 2];
        } else {
          return [3, 6, 9];
        }
      case 'h':
        if (isBoth) {
          return [0, 3, 4, 5, 7, 10];
        } else if (isRow) {
          return [3, 4, 5];
        }
        return [0, 7, 10];
      case 'd':
        if (isBoth) {
          return [1, 4, 6, 7, 8, 11];
        } else if (isRow) {
          return [6, 7, 8];
        }
        return [1, 4, 11];
      case 'c':
        if (isBoth) {
          return [2, 5, 8, 9, 10, 11];
        } else if (isRow) {
          return [9, 10, 11];
        }
        return [2, 5, 8];
      default:
        return [];
    }
  }
};
