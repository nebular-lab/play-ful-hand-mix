import { Flex } from '@chakra-ui/react';
import { memo } from 'react';

import { CardType } from '@/types';

import CardContainer from '../Card/CardContainer';

type Props = {
  cards: CardType[];
};

const CardTag = (props: Props) => {
  const { cards } = props;
  return (
    <Flex
      gap={1}
      h={10}
      px={2}
      rounded={'md'}
      border={'2px'}
      borderColor={'white'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      {cards.map((card, index) => {
        return <CardContainer key={index} card={card} size={'s'} />;
      })}
    </Flex>
  );
};
export default memo(CardTag);
