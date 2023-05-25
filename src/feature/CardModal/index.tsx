import { Modal, ModalContent, ModalOverlay } from '@chakra-ui/react';
import { CardModalFormContainer } from '../CardModalForm/CardModalContainer';
import { CardNodeType } from '@/types';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  cardNodes: CardNodeType[] | undefined;
  path: (string | number)[];
};
export const CardModal = (props: Props) => {
  const { isOpen, onClose, cardNodes, path } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={'3xl'}>
      <ModalOverlay />
      <ModalContent>
        <CardModalFormContainer
          onClose={onClose}
          cardNodes={cardNodes}
          path={path}
        />
      </ModalContent>
    </Modal>
  );
};
