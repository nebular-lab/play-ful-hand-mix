import { atom, atomFamily } from 'recoil';
import {
  ActionType,
  HandRangeType,
  HandSquareType,
  PositionNodeType,
} from './types';
import { defaultHandNode, defaultHandRange } from './const';

export const nodePathState = atom<Array<string | number>>({
  key: 'handNodePathState',
  default: ['child'],
});
export const handRangeState = atomFamily<
  HandSquareType,
  { row: number; col: number }
>({
  key: 'handRangeState',
  default: (index) => defaultHandRange[index.row][index.col],
});
export const includeSuitState = atom<Array<number>>({
  key: 'includeSuitState',
  default: [0, 1, 2, 3],
});
export const drawActionsState = atom<Array<ActionType>>({
  key: 'drawActionsState',
  default: [
    { move: 'BET S', percent: 40 },
    { move: 'BET M', percent: 0 },
    { move: 'BET L', percent: 60 },
    { move: 'CHECK', percent: 0 },
  ],
});
export const handNodeState = atom<PositionNodeType>({
  key: 'handNodeState',
  default: defaultHandNode,
});
