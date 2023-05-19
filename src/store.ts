import { atom, atomFamily } from 'recoil';
import { HandActionsType, HandRangeType, HandSquareType } from './types';
import { defaultHandRange } from './const';

export const nodePathState = atom<Array<string | number>>({
  key: 'handNodePathState',
  default: ['child'],
});
export const handRangeState = atomFamily<HandSquareType, { row: number; col: number }>({
  key: 'handRangeState',
  default: (index) => defaultHandRange[index.row][index.col],
});
export const includeSuitState = atom<Array<number>>({
  key: 'includeSuitState',
  default: [0, 1, 2, 3],
});
export const drawActionsState = atom<HandActionsType>({
  key: 'drawActionsState',
  default: {
    actions: [{ move: 'FOLD', percent: 100 }],
  },
});
