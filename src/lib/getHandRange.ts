import { Snapshot } from 'recoil';

import { handRangeState } from '@/store';
import { HandRangeType } from '@/types';

export const getHandRange = (snapshot: Snapshot) => {
  const handRange: HandRangeType = [];
  for (let row = 0; row < 13; row++) {
    const rowHandRange = [];
    for (let col = 0; col < 13; col++) {
      rowHandRange.push(
        snapshot.getLoadable(handRangeState({ row, col })).getValue(),
      );
    }
    handRange.push(rowHandRange);
  }
  return handRange;
};
