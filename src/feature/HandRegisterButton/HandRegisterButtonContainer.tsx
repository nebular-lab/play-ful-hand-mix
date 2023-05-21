import { useHandNode } from '@/hooks/useHandNode';
import { CardType, PairHandRangeType, PositionType } from '@/types';
import { memo } from 'react';
import HandRegisterButton from '.';
import { useRecoilState } from 'recoil';
import { boardState, handRangePairState, positionState } from '@/store';

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
