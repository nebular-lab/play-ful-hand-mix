import { HandSquareType, suitType } from '@/types';
import HandSquare from '.';
import { FC, MutableRefObject, memo } from 'react';
import { cardStrings } from '@/const';
import { useHandRange } from '@/hooks/useHandRange';
import { useRecoilState } from 'recoil';
import { handRangeState, selectedHandIndexState } from '@/store';
import { getGridNum } from '@/lib/getGridNum';
import { getCardText } from '@/lib/getCardText';
import { useSelectedHandIndex } from '@/hooks/useSelectedHandIndex';

type Props = {
  row: number;
  col: number;
  isMouseDownRef: MutableRefObject<boolean>;
};

const HandSquareContainer: FC<Props> = (props) => {
  const { row, col, isMouseDownRef } = props;
  const { drawMatrix } = useHandRange();
  const [handSquare] = useRecoilState(handRangeState({ row, col }));
  const [selectedHandIndex] = useRecoilState(selectedHandIndexState);
  const { setSelectedHandIndex } = useSelectedHandIndex();
  const isSelected =
    row == selectedHandIndex?.row && col == selectedHandIndex?.col;
  const borderColor = isSelected ? 'orange' : 'main';
  const suit = handSquare.suit;
  const CardText = getCardText(row, col, suit);
  const gridNum = getGridNum(suit);
  const onMouseMove = () => {
    if (isMouseDownRef.current) {
      drawMatrix(row, col);
    }
  };
  const onMouseDown = () => {
    drawMatrix(row, col);
  };
  const onClick = () => {
    if (isSelected) {
      setSelectedHandIndex(null);
    } else {
      setSelectedHandIndex({ row, col });
    }
  };
  return (
    <HandSquare
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onClick={onClick}
      gridNum={gridNum}
      text={CardText}
      borderColor={borderColor}
      isExist={true}
      hands={handSquare.hands}
    />
  );
};

export default memo(HandSquareContainer);
