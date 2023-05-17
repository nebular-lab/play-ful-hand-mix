import { atom } from 'recoil';
import { HandRangeType } from './types';
import { defaultHandRange } from './const';

export const editingNodePathState = atom<Array<string | number>>({
  key: 'editingHandNodePathState',
  default: ['child'],
});
export const editingHandRangeState = atom<HandRangeType>({
  key: 'editingHandRangeState',
  default: defaultHandRange,
});
