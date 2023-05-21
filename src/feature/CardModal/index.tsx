import { Modal, ModalContent, ModalOverlay } from '@chakra-ui/react';
import { CardModalFormContainer } from '../CardModalForm/CardModalContainer';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};
export const CardModal = (props: Props) => {
  const { isOpen, onClose } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={'3xl'}>
      <ModalOverlay />
      <ModalContent>
        <CardModalFormContainer onClose={onClose} />
      </ModalContent>
    </Modal>
  );
};
