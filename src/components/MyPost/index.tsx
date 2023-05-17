import { Container, Content, Header, ContainerButton } from "./style";
import MyTitlePost from "../MyTitlePost";
import Button from "../Button"
import React from "react";
import { useState } from "react";

import EditModal from "../ModalEdit";
import DeleteModal from "../ModalDelete";

export interface IPostProps {
  title: string;
  username: string;
  created_datetime: string;
  content: string;
}

const MyPost: React.FC<IPostProps> = ({
  title,
  username,
  content,
  created_datetime,
}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentContent, setCurrentContent] = useState(content);
  const [currentTitle, setCurrentTitle] = useState(title)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

 

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setShowModal(true)
  };

  
  const handleSave = (title: string, content: string) => {
    console.log(`Title: ${title}, Content: ${content}`);
    setIsModalOpen(false);
    setCurrentContent(content);
    setCurrentTitle(title)
  }

  const handleDelete = () => {
    // Aqui você pode implementar a lógica para deletar o post
    console.log("Deleting post...");
    // Exemplo: defina os campos relevantes como vazios ou nulos
    setCurrentContent("");
    setCurrentTitle("");
    setIsDeleteModalOpen(false);
  };

    



  return (
    <Container>
       
      <Header>
      
       <MyTitlePost text={currentTitle} onDelete={() => setIsDeleteModalOpen(true)}
        onEdit={handleOpenModal}/>
     
      </Header>
     
      <Content>
        <label>{username}</label> <span>{created_datetime}</span>
        <p>{currentContent}</p>
        {showModal && (
        <EditModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
          initialTitle="Hello world!"
          initialContent="Content here"
         
        />
        )}
         
         {isDeleteModalOpen && (
          <DeleteModal
            isOpen={isDeleteModalOpen}
            onClose={() => setIsDeleteModalOpen(false)}
            onDelete={handleDelete}
          />
        )}

      </Content>
    
    </Container>
  );
};

export default MyPost;
