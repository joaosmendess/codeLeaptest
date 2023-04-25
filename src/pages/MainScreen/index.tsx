import React from "react";
import { Container, Content, Header } from "./styled";

import Title from "../../components/Title";
import Button from "../../components/Button";
import Input from "../../components/Input";

const MainScreen: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title title="CodeLeap Network" />
      </Header>

      <Content>
        <Input />
        <Input />
      </Content>
    </Container>
  );
};

export default MainScreen;
