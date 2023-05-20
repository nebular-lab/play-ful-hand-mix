import { CardType } from '@/types';
import { Flex } from '@chakra-ui/react';
import Card from '.';
import { memo } from 'react';

type Props = {
  card: CardType;
  onClick?: () => void;
};

const CardContainer = (props: Props) => {
  const { card, onClick } = props;
  return <Card bg={card.mark} text={card.num} onClick={onClick} />;
};

export default memo(CardContainer);
