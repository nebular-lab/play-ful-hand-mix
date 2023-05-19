import { atom } from 'recoil';
import { HandRangeType } from './types';
import { defaultHandRange } from './const';

export const nodePathState = atom<Array<string | number>>({
  key: 'handNodePathState',
  default: ['child'],
});
export const handRangeState = atom<HandRangeType>({
  key: 'handRangeState',
  default: defaultHandRange,
});
export const includeSuitState = atom<Array<number>>({
  key: 'includeSuitState',
  default: [0, 1, 2, 3],
});
export const nodeState=atom