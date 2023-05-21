import { Flex } from '@chakra-ui/react';
import { memo } from 'react';

type Props = {
  onClick: () => void;
  isSelected: boolean;
};

const StreetTag = (props: Props) => {
  const { onClick, isSelected } = props;
  return (
    <Flex
      w={10}
      h={10}
      border={'2px'}
      bg={'gray.200'}
      borderColor={isSelected ? 'violet' : 'stroke'}
      _hover={{ bg: 'main' }}
      rounded={'full'}
      p={'2'}
      onClick={onClick}
      cursor={'pointer'}
    ></Flex>
  );
};
export default memo(StreetTag);