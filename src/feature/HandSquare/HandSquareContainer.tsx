import { HandActionsType, HandSquareType, suitType } from '@/types';
import HandSquare from '.';
import { FC, memo } from 'react';
import { cardStrings } from '@/const';
import { useHandRange } from '@/hooks/useHandRange';
import { useRecoilState } from 'recoil';
import { handRangeState } from '@/store';

type Props = {
  row: number;
  col: number;
};

const HandSquareContainer: FC<Props> = (props) => {
  const { row, col } = props;
  const { drawMatrix } = useHandRange();
  const [handSquare] = useRecoilState(handRangeState({ row, col }));
  const suit = handSquare.suit;
  let text = '';
  if (suit === 'pair') {
    text = `${cardStrings[row]}${cardStrings[col]}`;
  } else if (suit === 'suited') {
    text = `${cardStrings[row]}${cardStrings[col]}s`;
  } else if (suit === 'offsuited') {
    text = `${cardStrings[col]}${cardStrings[row]}o`;
  }

  return (
    <HandSquare
      handleDraw={() => drawMatrix(row, col)}
      suit={suit}
      text={text}
      isExist={true}
      hands={handSquare.hands}
    />
  );
};

export default memo(HandSquareContainer);
