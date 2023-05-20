import { ActionType } from '@/types';

export const updatedDrawActions = (
  drawActions: ActionType[],
  inputAction: ActionType,
) => {
  console.log('updatedDrawActions');
  const inputPercent = inputAction.percent;
  const settedPercent =
    drawActions.find((drawAction) => drawAction.move === inputAction.move)
      ?.percent ?? 0;
  let plusedNum = inputPercent - settedPercent;
  const updatedDrawActions: ActionType[] = [];
  for (const drawAction of drawActions) {
    if (drawAction.move === inputAction.move) {
      updatedDrawActions.push({ ...drawAction, percent: inputPercent });
    } else {
      if (drawAction.percent - plusedNum < 0) {
        plusedNum -= drawAction.percent;
        updatedDrawActions.push({ ...drawAction, percent: 0 });
      } else if (drawAction.percent - plusedNum > 100) {
        plusedNum -= drawAction.percent;
        updatedDrawActions.push({ ...drawAction, percent: 100 });
      } else {
        updatedDrawActions.push({
          ...drawAction,
          percent: drawAction.percent - plusedNum,
        });
        plusedNum = 0;
      }
    }
  }
  return updatedDrawActions;
};
