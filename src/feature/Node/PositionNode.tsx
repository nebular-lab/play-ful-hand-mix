import { PositionNodeType } from '@/types';
import Tag from '../Tag';
import _ from 'lodash';
import TagContainer from '../Tag/TagContainer';
import { Flex, UnorderedList } from '@chakra-ui/react';
import { ActionNode } from './ActionNode';
import { memo } from 'react';
import { useHandNodePath } from '@/hooks/useHandNodePath';
import { useHandRange } from '@/hooks/useHandRange';
import { useRecoilState } from 'recoil';
import { nodePathState } from '@/store';
import { useDrawActions } from '@/hooks/useDrawActions';
import { useBoard } from '@/hooks/useBoard';
import { usePosition } from '@/hooks/usePosition';
import { usePairHandRange } from '@/hooks/usePairHandRange';

type Props = PositionNodeType & { path: Array<number | string> };

const PositionNode = (props: Props) => {
  const { path, position, child, handRanges, actions, board } = props;
  const { setNodePath } = useHandNodePath(path);
  const { setHandRange } = useHandRange();
  const { resetDrawActions } = useDrawActions();
  const { setBoard } = useBoard();
  const { setPosition } = usePosition();
  const { setPairHandRange } = usePairHandRange();
  const onClick = () => {
    setNodePath(path);
    setHandRange(handRanges[position]);
    resetDrawActions(actions);
    setBoard(board);
    setPosition(position);
    setPairHandRange(handRanges);
  };
  const [nodePath] = useRecoilState(nodePathState);

  return (
    <Flex>
      <TagContainer
        type={'Position'}
        position={position}
        onClick={onClick}
        isSelected={_.isEqual(path, nodePath)}
      />
      <Flex mx={1} >
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
      </Flex>
    </Flex>
  );
};

export default memo(PositionNode);
