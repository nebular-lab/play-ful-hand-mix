import { ActionNodeType } from '@/types';
import { Box, Flex } from '@chakra-ui/react';
import { FC } from 'react';
import Tag from '../Tag';
import TagContainer from '../Tag/TagContainer';

type Props = ActionNodeType & { path: Array<number | string> };

export const ActionNode: FC<Props> = (props) => {
  const { path, move, child, isSelected } = props;
  const childType = child?.type;
  return (
    <Flex gap={1}>
      <TagContainer type={'Move'} move={move} />
      {childType === 'StreetNode' && isSelected && <Box></Box>}
      {childType === 'PositionNode' && !isSelected && <Box></Box>}
    </Flex>
  );
};
