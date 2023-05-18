import { ActionType, HandType, suitType } from '@/types';
import { Box, Flex, SimpleGrid, Text, grid } from '@chakra-ui/react';
import { FC } from 'react';
type Props = {
  handleDraw: () => void;
  suit: suitType;
  text: string;
  hands: HandType[];
  isExist: boolean;
};
export const HandSquare: FC<Props> = (props) => {
  const { handleDraw, suit, text, hands, isExist } = props;
  const boxSize = '60px';
  const textColor = isExist ? 'white' : 'gray.400';
  let gridNum: number;
  switch (suit) {
    case 'pair':
      gridNum = 6;
      break;
    case 'suited':
      gridNum = 4;
      break;
    case 'offsuited':
      gridNum = 12;
      break;
  }
  return (
    <Flex
      w={boxSize}
      h={boxSize}
      bg={'main'}
      position={'relative'}
      _hover={{ cursor: 'pointer' }}
      justifyContent={'center'}
      alignItems={'center'}
      border={'1px'}
      boxSizing="border-box"
    >
      <SimpleGrid columns={gridNum} position={'absolute'} w={'full'} h={'full'}>
        {hands.map((hand) => {
          return <HandStripe actions={hand.actions} suit={suit} />;
        })}
      </SimpleGrid>
      <Text position={'absolute'} userSelect={'none'} color={textColor}>
        {text}
      </Text>
      <Mask />
    </Flex>
  );
};

const Mask = () => {
  return (
    <Flex
      w={'full'}
      h={'full'}
      bg="blackAlpha.400"
      opacity={0}
      _hover={{ opacity: 1.0 }}
      position={'absolute'}
    ></Flex>
  );
};
type HandStripeProps = {
  actions: ActionType[];
  suit: suitType;
};
const HandStripe: FC<HandStripeProps> = (props) => {
  const { actions, suit } = props;

  return (
    <Flex direction={'column-reverse'} w={'full'} h={'full'}>
      {actions.map((action) => {
        let bg = 'main';
        switch (action.move) {
          case 'FOLD':
            bg = 'fold';
            break;
          case 'CALL':
            bg = 'call';
            break;
          case 'RAISE':
            bg = 'raise';
            break;
          case 'ALLIN':
            bg = 'allin';
            break;
          case 'CHECK':
            bg = 'check';
            break;
          case 'BET S':
            bg = 'betS';
            break;
          case 'BET M':
            bg = 'betM';
            break;
          case 'BET L':
            bg = 'betL';
            break;
        }
        return <Box w={'full'} h={`${action.percent}%`} bg={bg}></Box>;
      })}
    </Flex>
  );
};
