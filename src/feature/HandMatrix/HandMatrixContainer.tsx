import { handRangeState } from '@/store';
import { useRecoilCallback, useRecoilState } from 'recoil';

const HandMatrixContainer = () => {
  const [handRange, setHandRange] = useRecoilState(handRangeState);
};
