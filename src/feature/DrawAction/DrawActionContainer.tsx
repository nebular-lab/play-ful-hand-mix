import { FC, memo } from 'react';
import DrawAction from '.';
import { getMoveColor } from '@/lib/getMoveColor';
import { ActionType, MoveType } from '@/types';
import { useDrawActions } from '@/hooks/useDrawActions';

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
