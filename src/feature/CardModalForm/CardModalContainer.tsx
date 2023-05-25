import { useBoard } from '@/hooks/useBoard';
import { useHandNode } from '@/hooks/useHandNode';
import { boardState } from '@/store';
import { CardMarkType, CardNodeType, CardNumType, CardType } from '@/types';
import { produce } from 'immer';
import _ from 'lodash';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import Card from '../Card';
import CardModalForm from '.';

type Props = {
  onClose: () => void;
  cardNodes: CardNodeType[] | undefined;
  path: (string | number)[];
};
export const CardModalFormContainer = (props: Props) => {
  const { onClose, cardNodes, path } = props;
  const { addStreetCard, selectBoard } = useHandNode();
  const [board] = useRecoilState(boardState);

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
      nextNodeCards={cards}
      onCardClick={onCardClick}
      onSubmit={onSubmit}
      onBoardClick={onBoardClick}
    />
  );
};
