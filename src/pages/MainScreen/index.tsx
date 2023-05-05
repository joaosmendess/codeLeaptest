import React, { useRef, useState, useEffect } from "react";

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
  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [inputValue, setInputValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");

  const handleInputChange = () => {
    const inputVal: any = inputRef.current?.value;
    const textareaVal: any = textareaRef.current?.value;

    setInputValue(inputVal);
    setTextareaValue(textareaVal);
  };

  useEffect(() => {
    console.log("Valor do input:", inputValue);
    console.log("Valor da textarea:", textareaValue);
  }, [inputRef]);


  return (
    <Container>
      <Title titleType="MS" text="CodeLeap Network" />

      <Content>
        <Title titleType="CT" text="What’s on your mind?" />
        <Input
          input
          placeholder="Hello world"
          label="Tittle"
          ref={inputRef}
        ></Input>
        <Input textarea placeholder="Content here" label="Content" ref={textareaRef}></Input>
        <ContainerButton>
          <Button
            text="Create"
            buttonType={"primary"}
            onClick={handleInputChange}
          />
        </ContainerButton>
      </Content>
      <MyPost
        title="Meu primeiro Post"
        content="Testando aplicação"
        username="@joaosmendess"
        created_datetime="2 min ago"
      />

      <ContainerCard>
        <PostCardContainer />
      </ContainerCard>
    </Container>
  );
};

export default MainScreen;
