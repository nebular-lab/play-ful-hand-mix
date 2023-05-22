import {
  handRangeState,
  hoveredHandIndexState,
  selectedHandIndexState,
} from '@/store';
import { useRecoilState } from 'recoil';
import SelectedHand from '.';
import HandSquare from '../HandSquare';
import { getCardNumsFromIndex, getCardText } from '@/lib/getCardText';
import { useHandRange } from '@/hooks/useHandRange';

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
