import { useIncludeSuit } from '@/hooks/useIncludeSuite';
import { includeSuitState } from '@/store';
import { useRecoilState } from 'recoil';
import IncludeSuitSelect from '.';
import { CardMarkType, IncludeSuitType } from '@/types';

const IncludeSuitSelectContainer = () => {
  const [includeSuit] = useRecoilState(includeSuitState);

  const { toggleIncludeSuit } = useIncludeSuit();
  return (
    <IncludeSuitSelect
      includeSuitArray={includeSuit}
      toggleIncludeSuit={toggleIncludeSuit}
    />
  );
};
export default IncludeSuitSelectContainer;