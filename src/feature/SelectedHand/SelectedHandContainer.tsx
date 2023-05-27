import { useRecoilState } from 'recoil';


import { useHandRange } from '@/hooks/useHandRange';
import { getCardNumsFromIndex } from '@/lib/getCardText';
import {
  handRangeState,
  hoveredHandIndexState,
  selectedHandIndexState,
} from '@/store';

import SelectedHand from '.';

const SelectedHandContainer = () => {
  const [selectedHandIndex] = useRecoilState(selectedHandIndexState);
  const [hoveredHandIndex] = useRecoilState(hoveredHandIndexState);
  const displayHandIndex = selectedHandIndex ?? hoveredHandIndex;
  const [handSquare] = useRecoilState(handRangeState(displayHandIndex));
  const { drawHand } = useHandRange();
  const onMouseDown = (handIndex: number) => {
    drawHand(displayHandIndex.row, displayHandIndex.col, handIndex);
  };
  const suit = handSquare.suit;
  const gridNum = suit == 'suited' ? 2 : 3;
  const cardNums = getCardNumsFromIndex(
    displayHandIndex.row,
    displayHandIndex.col,
    suit,
  );
  return (
    <SelectedHand
      hands={handSquare.hands}
      gridNum={gridNum}
      cardNums={cardNums}
      suit={suit}
      onMouseDown={onMouseDown}
    />
  );
};
export default SelectedHandContainer;
