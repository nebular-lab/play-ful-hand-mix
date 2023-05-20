import { FC, memo } from 'react';
import Tag from '.';
import { MoveType } from '@/types';
import { getMoveColor } from '@/lib/getMoveColor';
type Props = {
  type: 'Position' | 'Move';
  position?: 'OOP' | 'IP';
  move?: MoveType;
};
const TagContainer: FC<Props> = (props) => {
  const { type, position = 'OOP', move = 'FOLD' } = props;
  if (type === 'Position') {
    return <Tag text={position} w={'80px'} h={'50px'} bg="main" />;
  } else {
    const bg = getMoveColor(move);
    return <Tag text={move ?? 'ERR'} w={'100px'} h={'50px'} bg={bg} />;
  }
};
export default memo(TagContainer);
