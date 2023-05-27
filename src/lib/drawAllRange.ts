import _ from 'lodash';

import { ActionType, HandRangeType } from '@/types';

export const allDrawedRange = (
  actions: ActionType[],
  handRange: HandRangeType,
) => {
  const nextHandRange = _.cloneDeep(handRange);
  handRange.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      col.hands.forEach((hand, handIndex) => {
        const sumPercent = hand.actions.reduce(
          (sum, action) => sum + action.percent,
          0,
        );
        const nextActions = actions.map((action) => {
          return {
            move: action.move,
            percent: (action.percent * sumPercent) / 100,
          };
        });
        nextHandRange[rowIndex][colIndex].hands[handIndex].actions =
          nextActions;
      });
    });
  });
  return nextHandRange;
};
