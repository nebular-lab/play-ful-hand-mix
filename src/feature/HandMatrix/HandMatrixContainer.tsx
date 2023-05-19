import { handRangeState } from '@/store';
import { useRecoilCallback, useRecoilState } from 'recoil';

const HandMatrixContainer = () => {
  const [handRange, setHandRange] = useRecoilState(handRangeState);
  const updateHandRange = useRecoilCallback(({ set }) => (row: number, col: number) => {
    set(handRangeState, (prev) => {
      
    });
  });
};
