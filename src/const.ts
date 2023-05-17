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
