import { HandRangeType, MoveType } from "@/types";
import _ from "lodash";

export const getNextHandRange=(handRange:HandRangeType,nextMove:MoveType)=>{
  const nextHandRange=_.cloneDeep(handRange);
  handRange.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      col.hands.forEach((hand, handIndex) => {
        hand.actions.forEach((action) => {
          if (action.move === nextMove) {
            nextHandRange[rowIndex][colIndex].hands[
              handIndex
            ].actions = [
              {
                move: 'CHECK',
                percent: action.percent,
              },
            ];
          } else {
            nextHandRange[rowIndex][colIndex].hands[handIndex] = {
              actions: [],
              isDeleted: true,
            };
          }
        });
      });
    });
  });
  return nextHandRange;
}