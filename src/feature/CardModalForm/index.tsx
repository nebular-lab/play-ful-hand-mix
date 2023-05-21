import { CardMarkType, CardNumType, CardType } from '@/types';
import { Button, Flex } from '@chakra-ui/react';
import Card from '../Card';
import CardContainer from '../Card/CardContainer';
import { memo } from 'react';

type Props = {
  selectedCards: CardType[];
  onCardClick: (card: CardType) => void;
  onSubmit: () => void;
};

const CardModalForm = (props: Props) => {
  const { selectedCards, onCardClick, onSubmit } = props;
  const nums: CardNumType[] = [
    'A',
    'K',
    'Q',
    'J',
    'T',
    '9',
    '8',
    '7',
    '6',
    '5',
    '4',
    '3',
    '2',
  ];
  const marks: CardMarkType[] = ['s', 'h', 'd', 'c'];
  return (
    <Flex p={5} gap={2}>
      <Flex direction={'column'} gap={2}>
        <Flex h={'10'} gap={1}>
          {selectedCards.map((card) => {
            return (
              <CardContainer
                key={`${card.mark} ${card.num}`}
                card={{ num: card.num, mark: card.mark }}
              />
            );
          })}
        </Flex>
        <Flex direction={'column'} gap={1}>
          {marks.map((mark) => {
            return (
              <Flex key={mark} gap={1}>
                {nums.map((num) => (
                  <CardContainer
                    key={num}
                    card={{ num, mark }}
                    onClick={() => onCardClick({ num, mark })}
                  />
                ))}
              </Flex>
            );
          })}
        </Flex>
      </Flex>
      <Button onClick={() => void onSubmit()}>決定</Button>
    </Flex>
  );
};

export default memo(CardModalForm);