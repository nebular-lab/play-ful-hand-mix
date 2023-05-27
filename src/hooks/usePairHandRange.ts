import { useRecoilCallback } from 'recoil';

import { handRangePairState } from '@/store';
import { PairHandRangeType } from '@/types';

export const usePairHandRange = () => {
  const setPairHandRange = useRecoilCallback(
    ({ set }) =>
      (ranges: PairHandRangeType) => {
        set(handRangePairState, ranges);
      },
    [],
  );
  return { setPairHandRange };
};
