import React from "react";
import { Container, ContainerButton, ContainerCard, Content, ContainerTitle } from "./styled";

import Title, { TitleType } from "../../components/Title";
import Button from "../../components/Button";
import Input from "../../components/Inputs";
import PostCard from "../../components/PostCard";


const MainScreen: React.FC = () => {
  return (
    <Container>
     
      <Title titleType='MS' text="CodeLeap Network" />
      
      <Content>
        <Title titleType='CT' text="What’s on your mind?" />
        <Input input placeholder="Hello world" label="Tittle"></Input>
        <Input  textarea placeholder="Content here" label="Content"></Input>
      <ContainerButton>
          <Button text="Create" buttonType={"primary"} onClick={() => console.log("You clicked on the pink circle!")
          } />
          </ContainerButton>
         
          
    
      </Content>
      <ContainerCard>
      <PostCard title="My First Post at CodeLeap Network!" content="Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit.

Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat." username="@Victor" created_datetime="25 minutes ago"/>
</ContainerCard>
    </Container>
    
  );
};

export default MainScreen;
