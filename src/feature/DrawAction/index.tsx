import { Button, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { FC, memo } from 'react';

import { ActionType, MoveType } from '@/types';

type Props = {
  move: MoveType;
  percent: number;
  moveColor: string;
  setAction: (inputAction: ActionType) => void;
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
      <Text
        fontWeight={'bold'}
        textColor={'white'}
        fontSize={'2xl'}
        userSelect={'none'}
      >
        {move}
      </Text>
      <Text
        fontWeight={'bold'}
        textColor={'white'}
        fontSize={'2xl'}
        userSelect={'none'}
      >
        {percent}
      </Text>
      <SimpleGrid columns={2} gap={'1px'}>
        <PercentButton
          percent={0}
          setAction={() => setAction({ move, percent: 0 })}
          moveColor={moveColor}
        />
        <PercentButton
          percent={25}
          setAction={() => setAction({ move, percent: 25 })}
          moveColor={moveColor}
        />
      </SimpleGrid>
      <SimpleGrid columns={3} gap={'1px'}>
        <PercentButton
          percent={50}
          setAction={() => setAction({ move, percent: 50 })}
          moveColor={moveColor}
        />
        <PercentButton
          percent={75}
          setAction={() => setAction({ move, percent: 75 })}
          moveColor={moveColor}
        />
        <PercentButton
          percent={100}
          setAction={() => setAction({ move, percent: 100 })}
          moveColor={moveColor}
        />
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
      onClick={setAction}
      userSelect={'none'}
    >
      {percent}
    </Button>
  );
};

export default memo(DrawAction);
