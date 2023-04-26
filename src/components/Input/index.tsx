import React from "react";

import { Container, Title, DivButton } from "./style";
import Button, { ButtonType } from "../Button";


const Input: React.FC  = ({}) => {
  return (
    <Container>
      <Title>
        <h1>What`s on your mind?</h1>
      </Title>
     <Input />
      <DivButton>
        <Button text="Create" buttonType={ButtonType.PRIMARY} />
      </DivButton>{" "}
    </Container>
  );
};

export default Input;
