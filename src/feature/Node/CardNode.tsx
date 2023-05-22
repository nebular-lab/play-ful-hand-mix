import { CardNodeType } from '@/types';
import { Flex, ListItem } from '@chakra-ui/react';
import CardTagContainer from '../CardTag/CardTagContainer';
import PositionNode from './PositionNode';
import { memo } from 'react';

type Props = CardNodeType & { path: Array<number | string> };

const CardNode = (props: Props) => {
  const { path, cards, child } = props;
  return (
    <ListItem listStyleType={'none'} p={0}>
      <Flex gap={1}>
        <CardTagContainer cards={cards} />
        {child && <PositionNode {...child} path={[...path, 'child']} />}
      </Flex>
    </ListItem>
  );
};

export default memo(CardNode);
