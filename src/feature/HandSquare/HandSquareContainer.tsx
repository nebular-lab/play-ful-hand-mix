import {  HandSquareType, suitType } from '@/types';
import HandSquare from '.';
import { FC, MutableRefObject, memo } from 'react';
import { cardStrings } from '@/const';
import { useHandRange } from '@/hooks/useHandRange';
import { useRecoilState } from 'recoil';
import { handRangeState } from '@/store';
import { getGridNum } from '@/lib/getGridNum';
import { getCardText } from '@/lib/getCardText';

type Props = {
  row: number;
  col: number;
  isMouseDownRef: MutableRefObject<boolean>;
};

const HandSquareContainer: FC<Props> = (props) => {
  const { row, col ,isMouseDownRef} = props;
  const { drawMatrix } = useHandRange();
  const [handSquare] = useRecoilState(handRangeState({ row, col }));
  const suit = handSquare.suit;
  const CardText = getCardText(row, col, suit);
  const gridNum = getGridNum(suit);
  const onMouseMove=()=>{
    if(isMouseDownRef.current){
      drawMatrix(row,col)
    }
  }
  return (
    <HandSquare
      handleDraw={() => drawMatrix(row, col)}
      onMouseMove={onMouseMove}
      gridNum={gridNum}
      text={CardText}
      isExist={true}
      hands={handSquare.hands}
    />
  );
};

export default memo(HandSquareContainer);
