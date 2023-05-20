import { MoveType } from '@/types';
import { Button, Flex, SimpleGrid, Spacer, Text } from '@chakra-ui/react';
import { FC, memo } from 'react';

type Props = {
  move: MoveType;
  percent: number;
  moveColor: string;
  setAction: () => void;
};
const DrawAction: FC<Props> = (props) => {
  const { move, percent, moveColor, setAction } = props;
  return (
    <Flex
      w={'full'}
      h={'full'}
      p={1}
      bg={moveColor}
      direction={'column'}
      alignItems={'center'}
      rounded={'sm'}
    >
      <Text fontWeight={'bold'} textColor={'white'} fontSize={'2xl'}>
        {move}
      </Text>
      <Text fontWeight={'bold'} textColor={'white'} fontSize={'2xl'}>
        {percent}
      </Text>
      <SimpleGrid columns={2} gap={'1px'}>
        <PercentButton percent={0} setAction={setAction} moveColor={moveColor} />
        <PercentButton percent={25} setAction={setAction} moveColor={moveColor} />
      </SimpleGrid>
      <SimpleGrid columns={3} gap={'1px'}>
        <PercentButton percent={50} setAction={setAction} moveColor={moveColor} />
        <PercentButton percent={75} setAction={setAction} moveColor={moveColor} />
        <PercentButton percent={100} setAction={setAction} moveColor={moveColor} />
      </SimpleGrid>
    </Flex>
  );
};
type PercentButtonProps = {
  percent: number;
  setAction: () => void;
  moveColor: string;
};
const PercentButton: FC<PercentButtonProps> = (props) => {
  const { percent, setAction, moveColor } = props;
  return (
    <Button
      variant={'outline'}
      color={'white'}
      size={'xs'}
      rounded={'sm'}
      _hover={{ color: moveColor, bg: 'white' }}
    >
      {percent}
    </Button>
  );
};

export default memo(DrawAction);
