import {
  CardNumType,
  HandRangeType,
  HandSquareType,
  PositionNodeType,
} from '@/types';

const pc: HandSquareType = {
  suit: 'pair',
  hands: [
    { isDeleted: false, actions: [{ move: 'FOLD', percent: 100 }] },

    { isDeleted: false, actions: [{ move: 'FOLD', percent: 100 }] },

    { isDeleted: false, actions: [{ move: 'FOLD', percent: 100 }] },

    { isDeleted: false, actions: [{ move: 'FOLD', percent: 100 }] },

    { isDeleted: false, actions: [{ move: 'FOLD', percent: 100 }] },

    { isDeleted: false, actions: [{ move: 'FOLD', percent: 100 }] },
  ],
};
const st: HandSquareType = {
  suit: 'suited',
  hands: [
    { isDeleted: false, actions: [{ move: 'FOLD', percent: 100 }] },

    { isDeleted: false, actions: [{ move: 'FOLD', percent: 100 }] },

    { isDeleted: false, actions: [{ move: 'FOLD', percent: 100 }] },

    { isDeleted: false, actions: [{ move: 'FOLD', percent: 100 }] },
  ],
};
const os: HandSquareType = {
  suit: 'offsuited',
  hands: [
    { isDeleted: false, actions: [{ move: 'FOLD', percent: 100 }] },

    { isDeleted: false, actions: [{ move: 'FOLD', percent: 100 }] },

    { isDeleted: false, actions: [{ move: 'FOLD', percent: 100 }] },

    { isDeleted: false, actions: [{ move: 'FOLD', percent: 100 }] },

    { isDeleted: false, actions: [{ move: 'FOLD', percent: 100 }] },

    { isDeleted: false, actions: [{ move: 'FOLD', percent: 100 }] },

    { isDeleted: false, actions: [{ move: 'FOLD', percent: 100 }] },

    { isDeleted: false, actions: [{ move: 'FOLD', percent: 100 }] },

    { isDeleted: false, actions: [{ move: 'FOLD', percent: 100 }] },

    { isDeleted: false, actions: [{ move: 'FOLD', percent: 100 }] },

    { isDeleted: false, actions: [{ move: 'FOLD', percent: 100 }] },

    { isDeleted: false, actions: [{ move: 'FOLD', percent: 100 }] },
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
export const cardStrings: CardNumType[] = [
  'A',
  'K',
  'Q',
  'J',
  'T',
  '9',
  '8',
  '7',
  '6',
  '5',
  '4',
  '3',
  '2',
];

export const defaultHandNode: PositionNodeType = {
  type: 'PositionNode',
  position: 'OOP',
  handRanges: {
    OOP: defaultHandRange,
    IP: defaultHandRange,
  },
  actions: [
    { move: 'PREFLOP', percent: 100 },
    { move: 'FOLD', percent: 0 },
  ],
  board: [],
};
