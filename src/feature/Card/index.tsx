import { Flex, Text } from '@chakra-ui/react';
import { FC, memo } from 'react';

type Props = {
  bg: string;
  text: string;
  w: number;
  h: number;
  textSize: string;
  rounded: string;
  onClick?: () => void;
};
const Card: FC<Props> = (props) => {
  const { bg, text, textSize, onClick, w, h, rounded } = props;
  return (
    <Flex
      bg={bg}
      w={w}
      h={h}
      rounded={rounded}
      alignItems={'center'}
      justifyContent={'center'}
      onClick={onClick}
      cursor={(onClick && 'pointer') || 'default'}
    >
      <Text textColor={'white'} fontSize={textSize}>
        {text}
      </Text>
    </Flex>
  );
};

export default memo(Card);
