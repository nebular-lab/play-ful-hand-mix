import { CardNodeType, CardType, HandRangeType } from '@/types';

import { deletedHandRange } from './deletedHandRange';

export const getCardnode = (
  OOPHandRange: HandRangeType,
  IPHandRange: HandRangeType,
  addCards: CardType[],
  boardCards: CardType[],
  isFirstCard: boolean,
) => {
  const cardNode: CardNodeType = {
    cards: addCards,
    isSelected: isFirstCard,
    isDisplay: isFirstCard,
    child: {
      position: 'OOP',
      type: 'PositionNode',
      actions: [
        { move: 'BET L', percent: 100 },
        { move: 'BET M', percent: 0 },
        { move: 'BET S', percent: 0 },
        { move: 'CHECK', percent: 0 },
      ],

      board: [...boardCards, ...addCards],
      handRanges: {
        OOP: deletedHandRange(OOPHandRange, [...addCards, ...boardCards]),
        IP: deletedHandRange(IPHandRange, [...addCards, ...boardCards]),
      },
    },
  };
  return cardNode;
};
