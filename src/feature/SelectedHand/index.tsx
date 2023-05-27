import { Box, Flex, SimpleGrid } from '@chakra-ui/react';
import { FC, memo } from 'react';


import { getCardMark } from '@/lib/convertCard';
import { getMoveColor } from '@/lib/getMoveColor';
import { CardNumType, HandType, suitType } from '@/types';

import CardContainer from '../Card/CardContainer';

type Props = {
  hands: HandType[];
  gridNum: number;
  cardNums: CardNumType[];
  suit: suitType;
  onMouseDown: (handIndex: number) => void;
};
const SelectedHand = (props: Props) => {
  const { hands, gridNum, cardNums, suit, onMouseDown } = props;

  return (
    <SimpleGrid columns={gridNum} w={'full'} h={'full'} gap={1}>
      {hands.map((hand, index) => {
        return (
          <SelectedHandStripe
            key={index}
            hand={hand}
            handIndex={index}
            cardNums={cardNums}
            suit={suit}
            onMouseDown={() => onMouseDown(index)}
          />
        );
      })}
    </SimpleGrid>
  );
};

type SelectedHandStripeProps = {
  hand: HandType;
  onMouseDown: () => void;
  suit: suitType;
  cardNums: CardNumType[];
  handIndex: number;
};
const SelectedHandStripe: FC<SelectedHandStripeProps> = (props) => {
  const { hand, onMouseDown, suit, cardNums, handIndex } = props;
  if (hand.isDeleted)
    return <Box w={'full'} h={'full'} bg={'unsetRange'}></Box>;
  const cardMarks = getCardMark(suit, handIndex);

  return (
    <Flex
      direction={'column-reverse'}
      w={'full'}
      h={'full'}
      onMouseDown={onMouseDown}
      position={'relative'}
    >
      <Flex
        w={'full'}
        h={'full'}
        position={'absolute'}
        direction={'column-reverse'}
      >
        {hand.actions.map((action, index) => {
          const bg = getMoveColor(action.move);
          console.log(action);
          return (
            <Flex
              key={index}
              w={'full'}
              h={`${action.percent}%`}
              bg={bg}
            ></Flex>
          );
        })}
      </Flex>
      <Flex position={'absolute'} w={'full'} h={'full'}>
        <CardContainer
          card={{ mark: cardMarks[0], num: cardNums[0] }}
          size={'s'}
        />
        <CardContainer
          card={{ mark: cardMarks[1], num: cardNums[1] }}
          size={'s'}
        />
      </Flex>
    </Flex>
  );
};

export default memo(SelectedHand);
