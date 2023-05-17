import React, { useState } from 'react';
import {ModalContainer, ModalBackground,ModalContent,ModalHeader,ModalTextarea ,ModalForm,ModalInput,ModalActions, ModalSaveButton, ModalCancelButton} from './style'

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (title: string, content: string) => void;
  initialTitle: string;
  initialContent: string;
  
}

const EditModal: React.FC<EditModalProps> = ({ isOpen, onClose, onSave, initialTitle, initialContent ,}) => {
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

  if (!isOpen) {
    return null; // Se o modal não estiver aberto, não renderize nada
  }
  return (
    <>
    
    <ModalContainer >
     <ModalBackground >
      <ModalContent >
        <ModalHeader>Edit item</ModalHeader>
        <ModalForm>
          <label > <b>Title</b> </label>
          <ModalInput
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
      
            
            
          />
          <label ><b>Content</b></label>
          <ModalTextarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
          />
        </ModalForm>
        <ModalActions>
          <ModalCancelButton onClick={handleCancel}> <b>Cancel</b> 
          </ModalCancelButton>
          <ModalSaveButton onClick= {handleSave}>Save</ModalSaveButton>
        </ModalActions>
      </ModalContent>
      </ModalBackground>
    </ModalContainer>
    </>
  );
  }
  export default EditModal;