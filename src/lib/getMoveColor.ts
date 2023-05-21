import { MoveType } from '../types';
export const getMoveColor = (move: MoveType) => {
  switch (move) {
    case 'FOLD':
      return 'fold';
    case 'CALL':
      return 'call';
    case 'RAISE':
      return 'raise';
    case 'ALLIN':
      return 'allin';
    case 'CHECK':
      return 'check';
    case 'BET S':
      return 'betS';
    case 'BET M':
      return 'betM';
    case 'BET L':
      return 'betL';
    case 'PREFLOP':
      return 'preflop';
  }
};
