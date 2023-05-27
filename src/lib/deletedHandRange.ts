import _ from 'lodash';

import { CardType, HandRangeType } from '@/types';

import { cardArrayIndex, convertCardValue } from './convertCard';

export const deletedHandRange = (
  handRange: HandRangeType,
  deleteCards: CardType[],
) => {
  const clonedHandRange = _.cloneDeep(handRange);
  deleteCards.forEach((card) => {
    const cardValue = convertCardValue(card.num);
    for (let i = 0; i < 13; i++) {
      const suit1 = clonedHandRange[cardValue][i].suit;
      const deleteIndex = cardArrayIndex(suit1, card.mark, false, false);
      deleteIndex?.forEach((index) => {
        clonedHandRange[cardValue][i].hands[index].isDeleted = true;
      });

      const suit2 = clonedHandRange[i][cardValue].suit;
      const deleteIndex2 = cardArrayIndex(suit2, card.mark, true, false);
      deleteIndex2?.forEach((index) => {
        clonedHandRange[i][cardValue].hands[index].isDeleted = true;
      });
    }
  });
  return clonedHandRange;
};
