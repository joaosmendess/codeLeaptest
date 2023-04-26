import React from "react";
import { Container, Content, DivButton } from "./styled";

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
      <DivButton>
          <Button text="Create" buttonType={ButtonType.PRIMARY} />
          </DivButton>
    
      </Content>
    </Container>
  );
};

export default MainScreen;
