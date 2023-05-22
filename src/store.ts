import { atom, atomFamily } from 'recoil';
import {
  ActionType,
  CardType,
  HandRangeType,
  HandSquareType,
  IncludeSuitType,
  PairHandRangeType,
  PositionNodeType,
  PositionType,
} from './types';
import { defaultHandNode, defaultHandRange } from './const';

export const nodePathState = atom<Array<string | number>>({
  key: 'handNodePathState',
  default: [],
});

export const handRangeState = atomFamily<
  HandSquareType,
  { row: number; col: number }
>({
  key: 'handRangeState',
  default: (index) => defaultHandRange[index.row][index.col],
});

export const handRangePairState = atom<PairHandRangeType>({
  key: 'handRangePairState',
  default: { OOP: defaultHandRange, IP: defaultHandRange },
});

export const boardState = atom<Array<CardType>>({
  key: 'boardState',
  default: [],
});

export const positionState = atom<PositionType>({
  key: 'positionState',
  default: 'OOP',
});

export const includeSuitState = atom<IncludeSuitType>({
  key: 'includeSuitState',
  default: [
    ['s', true],
    ['h', true],
    ['d', true],
    ['c', true],
  ],
});
export const drawActionsState = atom<Array<ActionType>>({
  key: 'drawActionsState',
  default: [
    { move: 'PREFLOP', percent: 100 },
    { move: 'FOLD', percent: 0 },
  ],
});
export const handNodeState = atom<PositionNodeType>({
  key: 'handNodeState',
  default: defaultHandNode,
});

export const selectedHandIndexState = atom<{ row: number; col: number } | null>(
  {
    key: 'selectedHandIndexState',
    default: null,
  },
);

export const hoveredHandIndexState = atom<{ row: number; col: number }>({
  key: 'hoveredHandIndexState',
  default: { row: 0, col: 0 },
});
