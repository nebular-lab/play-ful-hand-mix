import { Flex, UnorderedList, useDisclosure } from '@chakra-ui/react';
import _ from 'lodash';
import { memo } from 'react';

import { useHandNodePath } from '@/hooks/useHandNodePath';
import { StreetNodeType } from '@/types';

import { CardModal } from '../CardModal';
import StreetTagContainer from '../StreetTag/StreetTagContainer';
import CardNode from './CardNode';

type Props = StreetNodeType & { path: Array<number | string> };

const StreetNode = (props: Props) => {
  const { path, child } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { setNodePath } = useHandNodePath();
  const onClick = () => {
    onOpen();
    setNodePath(path);
  };
  return (
    <Flex gap={1}>
      <StreetTagContainer
        onClick={onClick}
        isSelected={_.isEqual(path, path)}
      />
      <CardModal
        isOpen={isOpen}
        onClose={onClose}
        cardNodes={child}
        path={path}
      />
      <UnorderedList m={0} spacing={1}>
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
      </UnorderedList>
    </Flex>
  );
};
export default memo(StreetNode);
