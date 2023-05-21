import { ActionType } from '@/types';

export const sumActionPercent = (actions: ActionType[]) => {
  return actions.reduce((acc, cur) => acc + cur.percent, 0);
};
