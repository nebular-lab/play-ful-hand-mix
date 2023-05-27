import { FC, MutableRefObject, memo, useCallback } from 'react';
import { useRecoilState } from 'recoil';

import { useHandRange } from '@/hooks/useHandRange';
import { useHoveredHandIndex } from '@/hooks/useHoveredHandIndex';
import { useSelectedHandIndex } from '@/hooks/useSelectedHandIndex';
import { getCardText } from '@/lib/getCardText';
import { getGridNum } from '@/lib/getGridNum';
import { handRangeState } from '@/store';

import HandSquare from '.';

type Props = {
  row: number;
  col: number;
  isMouseDownRef: MutableRefObject<boolean>;
  isSelected: boolean;
};

const HandSquareContainer: FC<Props> = (props) => {
  const { row, col, isMouseDownRef, isSelected } = props;
  const { drawMatrix } = useHandRange();
  const [handSquare] = useRecoilState(handRangeState({ row, col }));

  const { setHoveredHandIndex } = useHoveredHandIndex();
  const { setSelectedHandIndex } = useSelectedHandIndex();
  const borderColor = isSelected ? 'violet' : 'main';
  const border = isSelected ? '4px' : '1px';
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
  const onClick = useCallback(() => {
    if (isSelected) {
      setSelectedHandIndex(null);
    } else {
      setSelectedHandIndex({ row, col });
    }
  }, [isSelected]);
  const onMouseOver = () => {
    setHoveredHandIndex({ row, col });
  };
  return (
    <HandSquare
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseOver={onMouseOver}
      onClick={onClick}
      gridNum={gridNum}
      text={CardText}
      borderColor={borderColor}
      isExist={true}
      border={border}
      hands={handSquare.hands}
    />
  );
};

export default memo(HandSquareContainer);
