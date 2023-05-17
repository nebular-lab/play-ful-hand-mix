import { ActionType, HandType, suitType } from '@/types';
import { Box, Flex, Text } from '@chakra-ui/react';
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
  return (
    <Flex
      w={boxSize}
      h={boxSize}
      bg={'red'}
      position={'relative'}
      _hover={{ cursor: 'pointer' }}
      justifyContent={'center'}
      alignItems={'center'}
      border={'1px'}
    >
      <Mask />
      <Text userSelect={'none'} color={textColor}>{text}</Text>
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
