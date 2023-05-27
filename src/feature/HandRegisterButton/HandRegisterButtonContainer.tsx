import { memo } from 'react';
import { useRecoilState } from 'recoil';

import { useHandNode } from '@/hooks/useHandNode';
import { boardState, handRangePairState, positionState } from '@/store';

import HandRegisterButton from '.';

const HandRegisterButtonContainer = () => {
  const [position] = useRecoilState(positionState);
  const [board] = useRecoilState(boardState);
  const [handRanges] = useRecoilState(handRangePairState);
  const onClick = () => {
    registerHandRange(position, board, handRanges);
  };
  const { registerHandRange } = useHandNode();
  return <HandRegisterButton onClick={onClick} />;
};

export default memo(HandRegisterButtonContainer);
