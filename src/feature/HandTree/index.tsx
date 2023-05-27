import { memo } from 'react';

import { PositionNodeType } from '@/types';

import PositionNode from '../Node/PositionNode';

type Props = {
  handTree: PositionNodeType;
};

const HandTree = (props: Props) => {
  const { handTree } = props;
  return <PositionNode {...handTree} path={[]} />;
};

export default memo(HandTree);
