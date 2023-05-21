import { Flex } from '@chakra-ui/react';
import { memo } from 'react';

type Props = {
  onClick: () => void;
  isSelected: boolean;
};

const StreetTag = (props: Props) => {
  const { onClick, isSelected } = props;
  console.log('StreetTag')
  return (
    <Flex
      w={8}
      h={8}
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