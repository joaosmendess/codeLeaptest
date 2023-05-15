import React from 'react';
import {
  ModalContainer,
  ModalBackground,
  ModalContent,
  ModalHeader,
  ModalActions,
  ModalButton
} from './style';

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({
  isOpen,
  onClose,
  onDelete
}) => {
  const handleDelete = () => {
    onDelete();
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  if (!isOpen) {
    return null; // Se o modal não estiver aberto, não renderize nada
  }

  return (
    <ModalContainer>
      <ModalBackground  />
      <ModalContent>
        <ModalHeader>Confirmation</ModalHeader>
        <p>Are you sure you want to delete the post?</p>
        <ModalActions>
          <ModalButton onClick={handleDelete} >Delete</ModalButton>
          <ModalButton onClick={handleCancel}>Cancel</ModalButton>
        </ModalActions>
      </ModalContent>
    </ModalContainer>
  );
};

export default DeleteModal;
