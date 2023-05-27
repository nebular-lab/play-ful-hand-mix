import _ from 'lodash';

import { HandRangeType, MoveType } from '@/types';

export const getNextHandRange = (
  handRange: HandRangeType,
  nextMove: MoveType,
) => {
  const nextHandRange = _.cloneDeep(handRange);
  handRange.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      col.hands.forEach((hand, handIndex) => {
        hand.actions.forEach((action, actionIndex) => {
          if (action.move === nextMove) {
            nextHandRange[rowIndex][colIndex].hands[handIndex].actions[
              actionIndex
            ] = {
              move: 'CHECK',
              percent: action.percent,
            };
          } else {
            nextHandRange[rowIndex][colIndex].hands[handIndex].actions[
              actionIndex
            ] = {
              move: 'FOLD',
              percent: 0,
            };
          }
        });
      });
    });
  });
  return nextHandRange;
};
