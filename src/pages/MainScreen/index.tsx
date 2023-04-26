import React from "react";
import { Container, ContainerButton, Content,  } from "./styled";

import Title, { TitleType } from "../../components/Title";
import Button from "../../components/Button";

import Input from "../../components/Inputs";
import { ButtonType } from "../../components/Button";

const MainScreen: React.FC = () => {
  return (
    <Container>
      <Title titleType={TitleType.MS} text="CodeLeap Network" />

      <Content>
        <Title titleType={TitleType.CT} text="What’s on your mind?" />
        <Input input placeholder="Hello world" label="Tittle"></Input>
        <Input  textarea placeholder="Content here" label="Content"></Input>
      <ContainerButton>
          <Button text="Create" buttonType={ButtonType.PRIMARY} />
          </ContainerButton>
    
      </Content>
    </Container>
  );
};

export default MainScreen;
