import { handRangeState, selectedHandIndexState } from '@/store';
import { useRecoilCallback, useRecoilState } from 'recoil';
import HandMatrix from '.';
import { FC, MutableRefObject } from 'react';

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
