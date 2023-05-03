import React from "react";
import {
  Container,
  ContainerButton,
  ContainerCard,
  Content,
  ContainerTitle,
} from "./styled";

import Title, { TitleType } from "../../components/Title";
import Button from "../../components/Button";
import Input from "../../components/Inputs";
import MyPost from "../../components/MyPost";
import PostCardContainer from "../../actions";

const MainScreen: React.FC = () => {
  return (
    <Container>
      <Title titleType="MS" text="CodeLeap Network" />

      <Content>
        <Title titleType="CT" text="What’s on your mind?"  />
        <Input input placeholder="Hello world" label="Tittle"></Input>
        <Input textarea placeholder="Content here" label="Content"></Input>
        <ContainerButton>
          <Button
            text="Create"
            buttonType={"primary"}
            onClick={() => console.log("You clicked on the pink circle!")}
          />
        </ContainerButton>
      </Content>
<MyPost title="Meu primeiro Post" content="Testando aplicação" username="@joaosmendess" created_datetime="2 min ago"/>

      <ContainerCard>
        <PostCardContainer />
      </ContainerCard>
    </Container>
  );
};

export default MainScreen;
