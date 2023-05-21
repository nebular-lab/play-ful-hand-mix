import { FC, memo } from 'react';
import Tag from '.';
import { MoveType } from '@/types';
import { getMoveColor } from '@/lib/getMoveColor';
type Props = {
  type: 'Position' | 'Move';
  position?: 'OOP' | 'IP';
  move?: MoveType;
  onClick?: () => void;
  isSelected?: boolean;
};
const TagContainer: FC<Props> = (props) => {
  const { type, position = 'OOP', move = 'FOLD', onClick, isSelected } = props;
  const borderColor = isSelected ? 'orange' : 'white';
  if (move == 'PREFLOP') return null;
  if (type === 'Position') {
    return (
      <Tag
        text={position}
        bg="main"
        onClick={onClick}
        borderColor={borderColor}
      />
    );
  } else {
    const bg = getMoveColor(move);
    return <Tag text={move ?? 'ERR'} bg={bg} onClick={onClick} />;
  }
};
export default memo(TagContainer);
