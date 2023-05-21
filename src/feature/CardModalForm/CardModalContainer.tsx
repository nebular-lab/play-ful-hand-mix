import { useBoard } from '@/hooks/useBoard';
import { useHandNode } from '@/hooks/useHandNode';
import { boardState } from '@/store';
import { CardMarkType, CardNumType, CardType } from '@/types';
import { produce } from 'immer';
import _ from 'lodash';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import Card from '../Card';
import CardModalForm from '.';

type Props = {
  onClose: () => void;
};
export const CardModalFormContainer = (props: Props) => {
  const { onClose } = props;
  const { addStreetCard } = useHandNode();
  const [board] = useRecoilState(boardState);

  const [selectedCards, setSelectedCards] = useState<CardType[]>([]);
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
  return (
    <CardModalForm
      selectedCards={selectedCards}
      onCardClick={onCardClick}
      onSubmit={onSubmit}
    />
  );
};
