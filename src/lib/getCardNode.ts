import { CardNodeType, CardType, HandRangeType } from '@/types';
import { deletedHandRange } from './deletedHandRange';

export const getCardnode = (
  OOPHandRange: HandRangeType,
  IPHandRange: HandRangeType,
  addCards: CardType[],
  boardCards: CardType[],
) => {
  const cardNode: CardNodeType = {
    cards: addCards,
    isDisplay: true,
    child: {
      position: 'OOP',
      type: 'PositionNode',
      moves: ['BET S', 'BET M', 'BET L', 'CHECK'],

      board: [...boardCards, ...addCards],
      handRanges: {
        OOP: deletedHandRange(OOPHandRange, [...addCards, ...boardCards]),
        IP: deletedHandRange(IPHandRange, [...addCards, ...boardCards]),
      },
    },
  };
  return cardNode;
};
