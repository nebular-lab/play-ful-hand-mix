import { PositionNodeType } from '@/types';
import Tag from '../Tag';
import TagContainer from '../Tag/TagContainer';
import { UnorderedList } from '@chakra-ui/react';
import { ActionNode } from './ActionNode';
import { memo } from 'react';

type Props = PositionNodeType & { path: Array<number | string> };

const PositionNode = (props: Props) => {
  const { path, position, child } = props;
  return (
    <>
      <TagContainer type={'Position'} position={position} />
      <UnorderedList>
        {child?.map((actionNode, index) => {
          if (actionNode.isDisplay) {
            return (
              <ActionNode
                key={index}
                {...actionNode}
                path={[...path, 'child', index]}
              />
            );
          }
        })}
      </UnorderedList>
    </>
  );
};

export default memo(PositionNode);