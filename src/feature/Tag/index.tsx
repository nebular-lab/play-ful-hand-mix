import { Button, Flex, Text } from '@chakra-ui/react';
import { FC, memo } from 'react';

type Props = {
  text: string;
  w: string;
  h: string;
  bg: string;
  borderColor?: string;
  onClick?: () => void;
};
const Tag: FC<Props> = (props) => {
  const { text, w, h, bg, borderColor = 'white', onClick } = props;
  return (
    <Button
      w={w}
      h={h}
      bg={bg}
      _hover={{ bg: bg }}
      rounded={'sm'}
      border={'2px'}
      borderColor={borderColor}
      alignItems={'center'}
      justifyContent={'center'}
      onClick={onClick}
      variant={'outline'}
    >
      <Text fontWeight={'bold'} textColor={'white'} fontSize={'lg'}>
        {text}
      </Text>
    </Button>
  );
};
export default memo(Tag);
