import React from "react";
import { Container, Content, Header } from "./styled";

import Title from "../../components/Title";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Input2 from "../../components/Input2";


const MainScreen: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title text="CodeLeap Network" />
      </Header>
      <Input2 textarea placeholder="Oii" label="Opa" ></Input2>
      <Content>
        <Input />
        <Input />
      </Content>
    </Container>
  );
};

export default MainScreen;
