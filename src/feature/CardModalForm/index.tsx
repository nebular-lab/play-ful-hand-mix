import { CardMarkType, CardNumType, CardType } from '@/types';
import { Button, Flex } from '@chakra-ui/react';
import Card from '../Card';
import CardContainer from '../Card/CardContainer';
import { memo } from 'react';

type Props = {
  selectedCards: CardType[];
  nextNodeCards: CardType[][] | undefined;
  onCardClick: (card: CardType) => void;
  onSubmit: () => void;
  onBoardClick: (cardsIndex: number) => void;
};

const CardModalForm = (props: Props) => {
  const { selectedCards, nextNodeCards, onCardClick, onSubmit, onBoardClick } =
    props;
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
      <Flex direction={'column'} gap={4}>
        <Flex h={'10'} gap={1}>
          {selectedCards.map((card) => {
            return (
              <CardContainer
                key={`${card.mark} ${card.num}`}
                card={{ num: card.num, mark: card.mark }}
                onClick={() => onCardClick({ num: card.num, mark: card.mark })}
                size={'m'}
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
                    size={'m'}
                  />
                ))}
              </Flex>
            );
          })}
        </Flex>
      </Flex>
      <Button colorScheme={'whatsapp'} onClick={() => void onSubmit()}>
        決定
      </Button>
      <Flex direction={'column'} gap={1}>
        {nextNodeCards?.map((nextNodeCard, index) => {
          return (
            <Flex key={index} onClick={() => onBoardClick(index)}>
              {nextNodeCard.map((card) => {
                return (
                  <CardContainer
                    key={`${card.mark} ${card.num}`}
                    card={{ num: card.num, mark: card.mark }}
                    size={'m'}
                  />
                );
              })}
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default memo(CardModalForm);
