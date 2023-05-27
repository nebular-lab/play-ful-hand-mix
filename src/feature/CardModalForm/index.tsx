import { Button, Flex, Text } from '@chakra-ui/react';
import { memo } from 'react';

import { CardMarkType, CardNumType, CardType } from '@/types';

import CardContainer from '../Card/CardContainer';

type Props = {
  selectedCards: CardType[];
  board: CardType[];
  nextNodeCards: CardType[][] | undefined;
  onCardClick: (card: CardType) => void;
  onSubmit: () => void;
  onBoardClick: (cardsIndex: number) => void;
};

const CardModalForm = (props: Props) => {
  const {
    selectedCards,
    board,
    nextNodeCards,
    onCardClick,
    onSubmit,
    onBoardClick,
  } = props;
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
    <Flex p={5} gap={2} justifyContent={'center'}>
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
                {nums.map((num) => {
                  const isSelected =board.some((card) => card.num === num && card.mark === mark);
                  return (
                    <CardContainer
                      key={num}
                      card={{ num, mark }}
                      onClick={() => onCardClick({ num, mark })}
                      isSelected={isSelected}
                      size={'m'}
                    />
                  );
                })}
              </Flex>
            );
          })}
        </Flex>
        {nextNodeCards && <Text>過去に塗ったボード</Text>}
        <Flex direction={'column'} gap={1}>
          {nextNodeCards?.map((nextNodeCard, index) => {
            return (
              <Flex
                key={index}
                gap={1}
                onClick={() => onBoardClick(index)}
                cursor={'pointer'}
                border={'1px'}
                borderColor={'white'}
                w={'fit-content'}
                p={1}
                rounded={'md'}
              >
                {nextNodeCard.map((card) => {
                  return (
                    <CardContainer
                      key={`${card.mark} ${card.num}`}
                      card={{ num: card.num, mark: card.mark }}
                      // eslint-disable-next-line @typescript-eslint/no-empty-function
                      onClick={() => {}} //corsor pointerのため
                      size={'m'}
                    />
                  );
                })}
              </Flex>
            );
          })}
        </Flex>
      </Flex>

      <Button colorScheme={'whatsapp'} onClick={() => void onSubmit()}>
        決定
      </Button>
    </Flex>
  );
};

export default memo(CardModalForm);
