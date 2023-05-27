import { Flex } from '@chakra-ui/react';
import { memo } from 'react';
import {
  BsSuitClubFill,
  BsSuitHeartFill,
  BsSuitDiamondFill,
  BsSuitSpadeFill,
} from 'react-icons/bs';

import { CardMarkType } from '@/types';

type Props = {
  toggleIncludeSuit: (suit: CardMarkType) => void;
  includeSuitArray: [CardMarkType, boolean][];
};
const includeSuitSelect = (props: Props) => {
  const { toggleIncludeSuit, includeSuitArray } = props;
  return (
    <Flex>
      {includeSuitArray.map(([suit, isSelected]) => (
        <MarkButton
          key={suit}
          toggleIncludeSuit={() => toggleIncludeSuit(suit)}
          mark={suit}
          isSelected={isSelected}
        />
      ))}
    </Flex>
  );
};

export default memo(includeSuitSelect);

type ButtonProps = {
  toggleIncludeSuit: () => void;
  mark: CardMarkType;
  isSelected: boolean;
};
const MarkButton = (props: ButtonProps) => {
  const { toggleIncludeSuit, mark, isSelected } = props;
  let Icon;
  switch (mark) {
    case 's':
      Icon = <BsSuitSpadeFill />;
      break;
    case 'h':
      Icon = <BsSuitHeartFill />;
      break;
    case 'd':
      Icon = <BsSuitDiamondFill />;
      break;
    case 'c':
      Icon = <BsSuitClubFill />;
      break;
    default:
      break;
  }

  return (
    <Flex
      w={10}
      h={10}
      border={'4px'}
      bg={`card.${mark}`}
      borderColor={isSelected ? 'violet' : 'stroke'}
      _hover={{ bg: 'unsetRange' }}
      rounded={'full'}
      alignItems={'center'}
      justifyContent={'center'}
      p={'2'}
      onClick={toggleIncludeSuit}
      cursor={'pointer'}
    >
      {Icon}
    </Flex>
  );
};
