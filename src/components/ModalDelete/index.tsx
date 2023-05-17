import React from 'react';
import {
  ModalContainer,
  ModalBackground,
  ModalContent,
  ModalHeader,
  ModalActions,
  ModalDeleteButton,
  ModalCancelButton
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
        
        
        <p> <b>Are you sure you want to delete this item?</b> </p>
        <ModalActions>
          <ModalCancelButton onClick={handleCancel}>  <b>Cancel</b> </ModalCancelButton>
          <ModalDeleteButton onClick={handleDelete} >Delete</ModalDeleteButton>
        </ModalActions>
      </ModalContent>
    </ModalContainer>
  );
};

export default DeleteModal;
