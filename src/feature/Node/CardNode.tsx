import { CardNodeType } from '@/types';
import { Flex } from '@chakra-ui/react';
import CardTagContainer from '../CardTag/CardTagContainer';
import PositionNode from './PositionNode';
import { memo } from 'react';

type Props = CardNodeType & { path: Array<number | string> };

const CardNode = (props: Props) => {
  const { path, cards, child } = props;
  return (
    <Flex gap={1}>
      <CardTagContainer cards={cards} />
      {child && <PositionNode {...child} path={[...path, 'child']} />}
    </Flex>
  );
};

export default memo(CardNode);