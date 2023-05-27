import { memo } from 'react';

import { CardType } from '@/types';

import Card from '.';

type Props = {
  card: CardType;
  onClick?: () => void;
  size: 's' | 'm';
  isSelected?: boolean;
};

const CardContainer = (props: Props) => {
  const { card, onClick, size, isSelected } = props;
  const h = size == 's' ? 6 : 12;
  const w = size == 's' ? 5 : 10;
  const textSize = size == 's' ? 'md' : 'xl';
  const rounded = size == 's' ? 'sm' : 'md';
  const bg = isSelected ? 'gray.200' : `card.${card.mark}`;
  const clickHandler = isSelected ? undefined : onClick;
  return (
    <Card
      bg={bg}
      w={w}
      h={h}
      text={card.num}
      textSize={textSize}
      rounded={rounded}
      onClick={clickHandler}
    />
  );
};

export default memo(CardContainer);
