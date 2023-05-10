import React from "react";
import { useState } from "react";
import { Container, TitleText,SpanDiv } from "./style";

import Button from "../Button";
import { BiTrash , BiMessageSquareEdit} from "react-icons/bi";

import EditModal from "../ModalEdit";
export interface IMyTitlePost {
  text: string;
}

const MyTitlePost: React.FC<IMyTitlePost> = ({ text }) => {

  const [showModal, setShowModal] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSave = (title: string, content: string) => {
    (`Title: ${title}, Content: ${content}`);
    setIsModalOpen(false);
   
  };

  const ViewModal = ( ) => {

  if (isModalOpen||true) {
    setShowModal 
    
  }

  }
  return (
    <Container>
      <TitleText>

        
      
        
        
        <SpanDiv>
       <h1>{text}</h1>
      <span>
     
        <BiTrash 
        
        size={30} >
          
        <Button
            buttonType="primary"
            text="editar"
            onClick={() =>ViewModal()}           
          /> 
        </BiTrash>
       

        <BiMessageSquareEdit size={30} >
        <Button
          buttonType="danger"
          text="apagar"
          onClick={() => setIsModalOpen(true)}
        /> 
        </BiMessageSquareEdit>
       
          </span>
       
        </SpanDiv>
      </TitleText>
      {showModal&& (
      <EditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        initialTitle="Initial Title"
        initialContent="Initial Content"
      />)}
    </Container>
  );
};

export default MyTitlePost;
