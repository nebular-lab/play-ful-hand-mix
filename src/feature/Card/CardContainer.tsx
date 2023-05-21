import { CardType } from '@/types';
import { Flex } from '@chakra-ui/react';
import Card from '.';
import { memo } from 'react';

type Props = {
  card: CardType;
  onClick?: () => void;
  size: 's' | 'm';
};

const CardContainer = (props: Props) => {
  const { card, onClick, size } = props;
  const h = size == 's' ? 6 : 12;
  const w = size == 's' ? 5 : 10;
  const textSize = size == 's' ? 'md' : 'xl';
  const rounded = size == 's' ? 'sm' : 'md';
  return (
    <Card
      bg={`card.${card.mark}`}
      w={w}
      h={h}
      text={card.num}
      textSize={textSize}
      rounded={rounded}
      onClick={onClick}
    />
  );
};

export default memo(CardContainer);
