import React, { useState } from 'react';
import {ModalContainer, ModalBackground,ModalContent,ModalHeader,ModalTextarea ,ModalForm,ModalInput,ModalActions, ModalButton} from './style'

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (title: string, content: string) => void;
  initialTitle: string;
  initialContent: string;
}

const EditModal: React.FC<EditModalProps> = ({ isOpen, onClose, onSave, initialTitle, initialContent }) => {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);

  const handleSave = () => {
    onSave(title, content);
    onClose();
  };

  const handleCancel = () => {
    setTitle(initialTitle);
    setContent(initialContent);
    onClose();
  };

  return (
    <ModalContainer className={`modal ${isOpen ? 'is-active' : ''}`}  >
     
      <ModalContent >
        <ModalHeader>Edit</ModalHeader>
        <ModalForm>
          <ModalInput
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
          <ModalTextarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
          />
        </ModalForm>
        <ModalActions>
          <ModalButton onClick={handleSave}>Save</ModalButton>
          <ModalButton onClick={handleCancel}>Cancel</ModalButton>
        </ModalActions>
      </ModalContent>
    </ModalContainer>
  );
  }
  export default EditModal;