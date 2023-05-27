import { FC, memo } from 'react';

import { useDrawActions } from '@/hooks/useDrawActions';
import { getMoveColor } from '@/lib/getMoveColor';
import { ActionType } from '@/types';

import DrawAction from '.';

type Props = {
  action: ActionType;
};
const DrawActionContainer: FC<Props> = (props) => {
  const { action } = props;
  const moveColor = getMoveColor(action.move);
  const { setDrawActions } = useDrawActions();
  return (
    <DrawAction
      move={action.move}
      percent={action.percent}
      moveColor={moveColor}
      setAction={setDrawActions}
    />
  );
};

export default memo(DrawActionContainer);
