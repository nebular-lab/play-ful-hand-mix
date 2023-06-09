import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { FC, memo } from 'react';

import { getMoveColor } from '@/lib/getMoveColor';
import { HandType } from '@/types';
type Props = {
  onMouseDown: () => void;
  onMouseMove: () => void;
  onClick: () => void;
  onMouseOver: () => void;
  text: string;
  borderColor: string;
  border: string;
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
    border,
    onMouseMove,
    onClick,
    onMouseOver,
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
      border={border}
      borderColor={borderColor}
      boxSizing="border-box"
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseOver={onMouseOver}
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

const Mask = memo(() => {
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
});

Mask.displayName = 'Mask';

type HandStripeProps = {
  hand: HandType;
};

export const HandStripe: FC<HandStripeProps> = memo((props) => {
  const { hand } = props;
  if (hand.isDeleted)
    return <Box w={'full'} h={'full'} bg={'unsetRange'}></Box>;
  return (
    <Flex direction={'column-reverse'} w={'full'} h={'full'}>
      {hand.actions.map((action, index) => {
        const bg = getMoveColor(action.move);
        return (
          <Box key={index} w={'full'} h={`${action.percent}%`} bg={bg}></Box>
        );
      })}
    </Flex>
  );
});
HandStripe.displayName = 'HandStripe';

export default memo(HandSquare);
