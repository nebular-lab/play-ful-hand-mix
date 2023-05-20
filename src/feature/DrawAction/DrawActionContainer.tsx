import { FC, memo } from 'react';
import DrawAction from '.';
import { getMoveColor } from '@/lib/getMoveColor';
import { ActionType, MoveType } from '@/types';

type Props = {
  action: ActionType;
};
const DrawActionContainer: FC<Props> = (props) => {
  const { action } = props;
  const moveColor = getMoveColor(action.move);
  return (
    <DrawAction
      move={action.move}
      percent={action.percent}
      moveColor={moveColor}
      setAction={() => {}}
    />
  );
};

export default memo(DrawActionContainer);
