import { Button, Flex, Text } from '@chakra-ui/react';
import { FC, memo } from 'react';

type Props = {
  text: string;
  bg: string;
  borderColor?: string;
  onClick?: () => void;
};
const Tag: FC<Props> = (props) => {
  const { text, bg, borderColor = 'white', onClick } = props;
  return (
    <Flex
      w={20}
      h={10}
      bg={bg}
      _hover={{ bg: bg }}
      rounded={'md'}
      border={'2px'}
      borderColor={borderColor}
      alignItems={'center'}
      justifyContent={'center'}
      onClick={onClick}
      cursor={'pointer'}
    >
      <Text textColor={'white'}>{text}</Text>
    </Flex>
  );
};
export default memo(Tag);
