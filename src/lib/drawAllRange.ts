import { HandRangeType, MoveType } from '@/types';
import _ from 'lodash';

export const drawAllRange = (move: MoveType, handRange: HandRangeType) => {
  const nextHandRange = _.cloneDeep(handRange);
  handRange.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      col.hands.forEach((hand, handIndex) => {
        hand.actions.forEach((action, actionIndex) => {
          nextHandRange[rowIndex][colIndex].hands[handIndex].actions[
            actionIndex
          ].move = move;
        });
      });
    });
  });
  return nextHandRange;
};
