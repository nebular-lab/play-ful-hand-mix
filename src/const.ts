import { HandRangeType, HandSquareType } from '@/types';

const pc: HandSquareType = {
  suit: 'pair',
  hands: [
    {
      actions: [{ move: 'FOLD', percent: 100 }],
    },
    {
      actions: [{ move: 'FOLD', percent: 100 }],
    },
    {
      actions: [{ move: 'FOLD', percent: 100 }],
    },
    {
      actions: [{ move: 'FOLD', percent: 100 }],
    },
    {
      actions: [{ move: 'FOLD', percent: 100 }],
    },
    {
      actions: [{ move: 'FOLD', percent: 100 }],
    },
  ],
};
const st: HandSquareType = {
  suit: 'suited',
  hands: [
    {
      actions: [{ move: 'FOLD', percent: 100 }],
    },
    {
      actions: [{ move: 'FOLD', percent: 100 }],
    },
    {
      actions: [{ move: 'FOLD', percent: 100 }],
    },
    {
      actions: [{ move: 'FOLD', percent: 100 }],
    },
  ],
};
const os: HandSquareType = {
  suit: 'offsuited',
  hands: [
    {
      actions: [{ move: 'FOLD', percent: 100 }],
    },
    {
      actions: [{ move: 'FOLD', percent: 100 }],
    },
    {
      actions: [{ move: 'FOLD', percent: 100 }],
    },
    {
      actions: [{ move: 'FOLD', percent: 100 }],
    },
    {
      actions: [{ move: 'FOLD', percent: 100 }],
    },
    {
      actions: [{ move: 'FOLD', percent: 100 }],
    },
    {
      actions: [{ move: 'FOLD', percent: 100 }],
    },
    {
      actions: [{ move: 'FOLD', percent: 100 }],
    },
    {
      actions: [{ move: 'FOLD', percent: 100 }],
    },
    {
      actions: [{ move: 'FOLD', percent: 100 }],
    },
    {
      actions: [{ move: 'FOLD', percent: 100 }],
    },
    {
      actions: [{ move: 'FOLD', percent: 100 }],
    },
  ],
};

export const defaultHandRange: HandRangeType = [
  [pc, st, st, st, st, st, st, st, st, st, st, st, st],
  [os, pc, st, st, st, st, st, st, st, st, st, st, st],
  [os, os, pc, st, st, st, st, st, st, st, st, st, st],
  [os, os, os, pc, st, st, st, st, st, st, st, st, st],
  [os, os, os, os, pc, st, st, st, st, st, st, st, st],
  [os, os, os, os, os, pc, st, st, st, st, st, st, st],
  [os, os, os, os, os, os, pc, st, st, st, st, st, st],
  [os, os, os, os, os, os, os, pc, st, st, st, st, st],
  [os, os, os, os, os, os, os, os, pc, st, st, st, st],
  [os, os, os, os, os, os, os, os, os, pc, st, st, st],
  [os, os, os, os, os, os, os, os, os, os, pc, st, st],
  [os, os, os, os, os, os, os, os, os, os, os, pc, st],
  [os, os, os, os, os, os, os, os, os, os, os, os, pc],
];


export const cardNums = {
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
export const cardStrings = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2'];
