import React from "react";
import { useState } from "react";
import { Container, TitleText, SpanDiv } from "./style";

import Button from "../Button";
import { BiTrash, BiMessageSquareEdit } from "react-icons/bi";

import EditModal from "../ModalEdit";


interface IMyTitlePost {
  text: string;
  onEdit: () => void; // adiciona propriedade onEdit
  onDelete: () => void;
}

const MyTitlePost: React.FC<IMyTitlePost> = ({ text, onEdit, onDelete }) => {
  const handleEditClick = () => {
   console.log('Botão de edição clicado!');
   onEdit

  };

  return (
    <Container>
      <TitleText>
        <SpanDiv>
          <h1>{text}</h1>
          <span>
            <BiTrash size={30} onClick={onDelete}>
              <Button
                buttonType="danger"
                text="apagar"
                onClick={onDelete}
              />
            </BiTrash>

          <BiMessageSquareEdit size={30} onClick={onEdit}>
              <Button
                buttonType="primary"
                text="editar"
                onClick={onEdit
                }
              />
              </BiMessageSquareEdit>
            
          </span>
        </SpanDiv>
      </TitleText>

    </Container>
  );
};

export default MyTitlePost