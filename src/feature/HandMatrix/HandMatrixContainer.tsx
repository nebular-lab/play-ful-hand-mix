import { useHandRange } from '@/hooks/useHandRange';
import { handRangeState } from '@/store';
import { useRecoilCallback, useRecoilState } from 'recoil';
import HandMatrix from '.';


export const HandMatrixContainer = () => {
  
  return <HandMatrix  />;
};
