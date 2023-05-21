import { ActionNodeType } from '@/types';
import { Box, Flex } from '@chakra-ui/react';
import { FC } from 'react';
import Tag from '../Tag';
import TagContainer from '../Tag/TagContainer';
import StreetNode from './StreetNode';
import PositionNode from './PositionNode';

type Props = ActionNodeType & { path: Array<number | string> };

export const ActionNode: FC<Props> = (props) => {
  const { path, move, child } = props;
  const childType = child?.type;
  return (
    <Flex gap={1}>
      <TagContainer type={'Move'} move={move} />
      {childType === 'StreetNode' && child && (
        <StreetNode
          type="StreetNode"
          path={[...path, 'child']}
          board={child.board}
          handRanges={child.handRanges}
          child={child.child}
        />
      )}
      {childType === 'PositionNode' && child && (
        <PositionNode
          type="PositionNode"
          path={[...path, 'child']}
          position={child.position}
          child={child.child}
          board={child.board}
          actions={child.actions}
          handRanges={child.handRanges}
        />
      )}
    </Flex>
  );
};
