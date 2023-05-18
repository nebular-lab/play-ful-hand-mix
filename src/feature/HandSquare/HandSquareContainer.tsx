import { HandType, suitType } from '@/types';
import { HandSquare } from '.';
import { FC } from 'react';
import { cardStrings } from '@/const';

type Props = {
  hands: HandType[];
  suit: suitType;
  row: number;
  col: number;
};

export const HandSquareContainer: FC<Props> = (props) => {
  const { hands, suit, row, col } = props;

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
      handleDraw={() => {
        console.log('aaa');
      }}
      suit={suit}
      text={text}
      isExist={true}
      hands={hands}
    />
  );
};
