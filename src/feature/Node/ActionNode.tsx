import { Flex } from '@chakra-ui/react';
import { FC } from 'react';

import { useHandNode } from '@/hooks/useHandNode';
import { ActionNodeType } from '@/types';

import TagContainer from '../Tag/TagContainer';
import PositionNode from './PositionNode';
import StreetNode from './StreetNode';

type Props = ActionNodeType & { path: Array<number | string> };

export const ActionNode: FC<Props> = (props) => {
  const { path, move, child, isSelected } = props;
  const childType = child?.type;
  const { selectAction } = useHandNode();
  return (
    <Flex gap={1} alignItems={'center'}>
      <TagContainer
        type={'Move'}
        move={move}
        onClick={() => selectAction(path)}
      />
      {childType === 'StreetNode' && child && isSelected  && (
        <StreetNode
          type="StreetNode"
          path={[...path, 'child']}
          board={child.board}
          handRanges={child.handRanges}
          child={child.child}
        />
      )}
      {childType === 'PositionNode' && child && isSelected && (
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
