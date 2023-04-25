import React from "react";

import { Container, Title, DivButton } from "./style";
import Button, { ButtonType } from "../Button";

const Input: React.FC = ({}) => {
  return (
    <Container>
      <Title>
        <h1>What`s on your mind?</h1>
      </Title>
      <div>
        <h3>Title</h3>
        <input type="text" name="title" placeholder="Hello World" id="text" />

        <h3> Content</h3>
        <input
          type="text"
          name="content"
          placeholder="Content here"
          id="content" // não se usa id assim no react.
        />
      </div>
      <DivButton>
        <Button text="Create" buttonType={ButtonType.PRIMARY} />
      </DivButton>{" "}
    </Container>
  );
};

export default Input;
