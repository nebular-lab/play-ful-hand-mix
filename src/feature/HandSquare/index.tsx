import { getMoveColor } from '@/lib/getMoveColor';
import { getGridNum } from '@/lib/getGridNum';
import { ActionType, HandType, suitType } from '@/types';
import { Box, Flex, SimpleGrid, Text, grid } from '@chakra-ui/react';
import { FC, MutableRefObject, memo } from 'react';
type Props = {
  onMouseDown: () => void;
  onMouseMove: () => void;
  onClick: () => void;
  text: string;
  borderColor: string;
  hands: HandType[];
  isExist: boolean;
  gridNum: number;
};
const HandSquare: FC<Props> = (props) => {
  const {
    onMouseDown,
    text,
    hands,
    isExist,
    gridNum,
    borderColor,
    onMouseMove,
    onClick,
  } = props;
  const w = '60px';
  const h = '52px';
  const textColor = isExist ? 'white' : 'gray.400';
  return (
    <Flex
      w={w}
      h={h}
      bg={'unsetRange'}
      position={'relative'}
      _hover={{ cursor: 'pointer' }}
      justifyContent={'center'}
      alignItems={'center'}
      border={'1px'}
      borderColor={borderColor}
      boxSizing="border-box"
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onClick={onClick}
    >
      <SimpleGrid columns={gridNum} position={'absolute'} w={'full'} h={'full'}>
        {hands.map((hand, index) => {
          return <HandStripe key={index} hand={hand} />;
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
  hand: HandType;
};
const HandStripe: FC<HandStripeProps> = (props) => {
  const { hand } = props;
  if (hand.isDeleted)
    return <Box w={'full'} h={'full'} bg={'unsetRange'}></Box>;
  return (
    <Flex direction={'column-reverse'} w={'full'} h={'full'}>
      {hand.actions.map((action, index) => {
        let bg = getMoveColor(action.move);
        return (
          <Box key={index} w={'full'} h={`${action.percent}%`} bg={bg}></Box>
        );
      })}
    </Flex>
  );
};

export default memo(HandSquare);
