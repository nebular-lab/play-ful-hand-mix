import { useIncludeSuit } from '@/hooks/useIncludeSuite';
import { includeSuitState } from '@/store';
import { useRecoilState } from 'recoil';
import IncludeSuitSelect from '.';
import { CardMarkType, IncludeSuitType } from '@/types';

const IncludeSuitSelectContainer = () => {
  const [includeSuit] = useRecoilState(includeSuitState);
  const includeSuitArray = Object.entries(includeSuit) as Array<
    [CardMarkType, boolean]
  >;
  const { toggleIncludeSuit } = useIncludeSuit();
  return (
    <IncludeSuitSelect
      includeSuitArray={includeSuitArray}
      toggleIncludeSuit={toggleIncludeSuit}
    />
  );
};
export default IncludeSuitSelectContainer;