import React from "react";

import { Container, TitleText,SpanDiv } from "./style";

import Button from "../Button";
import { BiTrash , BiMessageSquareEdit} from "react-icons/bi";

export interface IMyTitlePost {
  text: string;
}

const MyTitlePost: React.FC<IMyTitlePost> = ({ text }) => {
  return (
    <Container>
      <TitleText>

        
      
        
        
        <SpanDiv>
       <h1>{text}</h1>
      <span>
        <BiTrash 
        
        size={30} >
        <Button
            buttonType="danger"
            text="editar"
            onClick={() => console.log("You clicked on the pink circle!")}
          /> 
        </BiTrash>

        <BiMessageSquareEdit size={30} >
        <Button
          buttonType="primary"
          text="apagar"
          onClick={() => console.log("You clicked on the pink circle!")}
        /> 
        </BiMessageSquareEdit>
            
          </span>
       
        </SpanDiv>
      </TitleText>
    </Container>
  );
};

export default MyTitlePost;
