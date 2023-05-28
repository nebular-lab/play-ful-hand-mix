import { Modal, ModalContent, ModalOverlay } from '@chakra-ui/react';

import { CardNodeType, CardType } from '@/types';

import { CardModalFormContainer } from '../CardModalForm/CardModalFormContainer';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  cardNodes: CardNodeType[] | undefined;
  path: (string | number)[];
  board: CardType[];
};
export const CardModal = (props: Props) => {
  const { isOpen, onClose, cardNodes, path, board } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={'3xl'}>
      <ModalOverlay />
      <ModalContent>
        <CardModalFormContainer
          onClose={onClose}
          cardNodes={cardNodes}
          path={path}
          board={board}
        />
      </ModalContent>
    </Modal>
  );
};
