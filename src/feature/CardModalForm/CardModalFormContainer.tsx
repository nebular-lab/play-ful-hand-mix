import { produce } from 'immer';
import _ from 'lodash';
import { useState } from 'react';

import { useHandNode } from '@/hooks/useHandNode';
import { CardNodeType, CardType } from '@/types';

import CardModalForm from '.';

type Props = {
  onClose: () => void;
  cardNodes: CardNodeType[] | undefined;
  path: (string | number)[];
  board: CardType[];
};
export const CardModalFormContainer = (props: Props) => {
  const { onClose, cardNodes, path, board } = props;
  const { addStreetCard, selectBoard } = useHandNode();

  const [selectedCards, setSelectedCards] = useState<CardType[]>([]);
  const cards = cardNodes?.map((cardNode) => cardNode.cards);
  const onCardClick = (clickedCard: CardType) => {
    if (_.some(selectedCards, clickedCard)) {
      const nextState = produce(selectedCards, (draft) => {
        return draft.filter(
          (selectedCard) => !_.isEqual(clickedCard, selectedCard),
        );
      });
      setSelectedCards(nextState);
    } else {
      const nextState = produce(selectedCards, (draft) => {
        draft.push(clickedCard);
      });
      setSelectedCards(nextState);
    }
  };
  const onSubmit = () => {
    if (!(selectedCards.length == 3 || selectedCards.length == 1)) {
      alert('カードを正しく選択してください');
      return;
    }
    addStreetCard(board, selectedCards);
    onClose();
  };
  const onBoardClick = (cardsIndex: number) => {
    selectBoard([...path, 'child', cardsIndex]);
    onClose();
  };
  return (
    <CardModalForm
      selectedCards={selectedCards}
      board={board}
      nextNodeCards={cards}
      onCardClick={onCardClick}
      onSubmit={onSubmit}
      onBoardClick={onBoardClick}
    />
  );
};
