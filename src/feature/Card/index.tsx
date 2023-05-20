import { Flex, Text } from '@chakra-ui/react';
import { FC, memo } from 'react';

type Props = {
  bg: string;
  text: string;
  onClick?: () => void;
};
const Card: FC<Props> = (props) => {
  const { bg, text, onClick } = props;
  return (
    <Flex
      bg={bg}
      w={'full'}
      h={'full'}
      rounded={'md'}
      alignItems={'center'}
      justifyContent={'center'}
      onClick={onClick}
    >
      <Text fontWeight={'bold'} textColor={'white'} fontSize={'2xl'}>
        {text}
      </Text>
    </Flex>
  );
};

export default memo(Card);
