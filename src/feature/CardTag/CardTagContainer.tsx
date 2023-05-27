import { memo } from 'react';

import { CardType } from '@/types';

import CardTag from '.';

type Props = {
  cards: CardType[];
};

const CardTagContainer = (props: Props) => {
  const { cards } = props;
  return <CardTag cards={cards} />;
};
export default memo(CardTagContainer);
