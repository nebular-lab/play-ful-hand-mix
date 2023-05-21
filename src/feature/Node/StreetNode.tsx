import { StreetNodeType } from '@/types';
import StreetTagContainer from '../StreetTag/StreetTagContainer';
import { Flex, useDisclosure } from '@chakra-ui/react';
import _ from 'lodash';
import CardNode from './CardNode';
import { memo } from 'react';

type Props = StreetNodeType & { path: Array<number | string> };

const StreetNode = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { path, child } = props;
  const onClick = () => {
    onOpen();
  };
  return (
    <Flex gap={1}>
      <StreetTagContainer
        onClick={onClick}
        isSelected={_.isEqual(path, path)}
      />
      {child?.map((cardNode, index) => {
        if (cardNode.isDisplay) {
          return (
            <CardNode
              key={index}
              {...cardNode}
              path={[...path, 'child', index]}
            />
          );
        }
      })}
    </Flex>
  );
};
export default memo(StreetNode);
