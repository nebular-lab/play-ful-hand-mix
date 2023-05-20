import { getMoveColor } from '@/lib/getMoveColor';
import { getGridNum } from '@/lib/getGridNum';
import { ActionType, HandActionsType, suitType } from '@/types';
import { Box, Flex, SimpleGrid, Text, grid } from '@chakra-ui/react';
import { FC, MutableRefObject, memo } from 'react';
type Props = {
  handleDraw: () => void;
  onMouseMove: () => void;
  text: string;
  hands: HandActionsType[];
  isExist: boolean;
  gridNum: number;
};
const HandSquare: FC<Props> = (props) => {
  const { handleDraw, text, hands, isExist, gridNum, onMouseMove } = props;
  const w = '60px';
  const h = '52px';
  const textColor = isExist ? 'white' : 'gray.400';
  return (
    <Flex
      w={w}
      h={h}
      bg={'main'}
      position={'relative'}
      _hover={{ cursor: 'pointer' }}
      justifyContent={'center'}
      alignItems={'center'}
      border={'1px'}
      boxSizing="border-box"
      onMouseDown={handleDraw}
      onMouseMove={onMouseMove}
    >
      <SimpleGrid columns={gridNum} position={'absolute'} w={'full'} h={'full'}>
        {hands.map((hand, index) => {
          return <HandStripe key={index} actions={hand.actions} />;
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
};
const HandStripe: FC<HandStripeProps> = (props) => {
  const { actions } = props;

  return (
    <Flex direction={'column-reverse'} w={'full'} h={'full'}>
      {actions.map((action, index) => {
        let bg = getMoveColor(action.move);
        return <Box key={index} w={'full'} h={`${action.percent}%`} bg={bg}></Box>;
      })}
    </Flex>
  );
};

export default memo(HandSquare);
