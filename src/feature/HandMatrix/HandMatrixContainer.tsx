import { useHandRange } from '@/hooks/useHandRange';
import { handRangeState } from '@/store';
import { useRecoilCallback, useRecoilState } from 'recoil';
import HandMatrix from '.';
import { FC, MutableRefObject } from 'react';

type Props = {
  isMouseDownRef: MutableRefObject<boolean>;
};
export const HandMatrixContainer:FC<Props> = (props) => {
  const { isMouseDownRef } = props;
  return <HandMatrix isMouseDownRef={isMouseDownRef} />;
};
