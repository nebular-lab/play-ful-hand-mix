import { useRecoilState } from 'recoil';

import { useIncludeSuit } from '@/hooks/useIncludeSuite';
import { includeSuitState } from '@/store';

import IncludeSuitSelect from '.';

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
