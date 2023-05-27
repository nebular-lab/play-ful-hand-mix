import { Flex } from '@chakra-ui/react';
import _ from 'lodash';
import { memo } from 'react';
import { useRecoilState } from 'recoil';

import { useBoard } from '@/hooks/useBoard';
import { useDrawActions } from '@/hooks/useDrawActions';
import { useHandNodePath } from '@/hooks/useHandNodePath';
import { useHandRange } from '@/hooks/useHandRange';
import { usePairHandRange } from '@/hooks/usePairHandRange';
import { usePosition } from '@/hooks/usePosition';
import { nodePathState } from '@/store';
import { PositionNodeType } from '@/types';

import TagContainer from '../Tag/TagContainer';
import { ActionNode } from './ActionNode';

type Props = PositionNodeType & { path: Array<number | string> };

const PositionNode = (props: Props) => {
  const { path, position, child, handRanges, actions, board } = props;
  const { setNodePath } = useHandNodePath();
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
      <Flex mx={1}>
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
