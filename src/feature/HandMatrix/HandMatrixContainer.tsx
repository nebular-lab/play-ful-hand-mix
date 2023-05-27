import { FC, MutableRefObject } from 'react';
import { useRecoilState } from 'recoil';

import { selectedHandIndexState } from '@/store';

import HandMatrix from '.';

type Props = {
  isMouseDownRef: MutableRefObject<boolean>;
};
export const HandMatrixContainer: FC<Props> = (props) => {
  const { isMouseDownRef } = props;
  const [selectedHandIndex] = useRecoilState(selectedHandIndexState);

  return (
    <HandMatrix
      isMouseDownRef={isMouseDownRef}
      selectedHandIndex={selectedHandIndex}
    />
  );
};
