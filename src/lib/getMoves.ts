import { Snapshot } from 'recoil';

import { MoveType } from '@/types';

import { getHandRange } from './getHandRange';

export const getMoves = (snapshot: Snapshot) => {
  const moves = new Set<MoveType>();
  const handRange = getHandRange(snapshot);
  handRange.forEach((row) => {
    row.forEach((col) => {
      col.hands.forEach((hand) => {
        hand.actions.forEach((action) => {
          if (action.percent > 0) moves.add(action.move);
        });
      });
    });
  });
  return Array.from(moves);
};
