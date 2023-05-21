import { handRangePairState } from '@/store';
import { PairHandRangeType } from '@/types';
import { useRecoilCallback } from 'recoil';

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
