import React, { useRef, useState, useEffect } from "react";

import {
  Container,
  ContainerButton,
  ContainerCard,
  Content,
  ContainerTitle,
  MyPostContainer
} from "./styled";

import Title, { TitleType } from "../../components/Title";
import Button from "../../components/Button";
import Input from "../../components/Inputs";
import MyPost from "../../components/MyPost";
import PostCardContainer from "../../actions";




interface Post {
  title: string;
  content: string;
  created_datetime: string;
}


const MainScreen: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [inputValue, setInputValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const [titleName, setTitleName] = useState("");
  const [content, setContent] = useState("");
  const [showPost, setShowPost] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (event.target === inputRef.current) {
      setInputValue(event.target.value);
    } else if (event.target === textareaRef.current) {
      setTextareaValue(event.target.value);
    }
  };

  const handleSubmit = () => {
    setTitleName(inputValue);
    setContent(textareaValue);
    setShowPost(true);
    setPosts([
      {
        title: inputValue,
        content: textareaValue,
        created_datetime: new Date().toLocaleString(),
      },
      ...posts
    ]);
    setInputValue("");
    setTextareaValue("");
    if (inputValue && setTextareaValue === null) {
      return alert("ola")
      
    }
  };

  return (
    <Container>
      <ContainerTitle>
        <Title titleType="MS" text="CodeLeap Network" />
      </ContainerTitle>

      <Content>
        <Title titleType="CT" text="What’s on your mind?" />
        <Input
          input
          placeholder="Hello world"
          label="Title"
          ref={inputRef}
          onChange={handleChange}
        />
        <Input
          textarea
          placeholder="Content here"
          label="Content"
          ref={textareaRef}
          onChange={handleChange}
        />
        <ContainerButton>
          <Button
            text="Create"
            buttonType="primary"
            onClick={handleSubmit}
          />
        </ContainerButton>
      </Content>
      <MyPostContainer>
      {posts.map((post, index) => (
        <MyPost
          key={index}
          title={post.title}
          content={post.content}
          username="@joaosmendess"
          created_datetime={post.created_datetime}
        />
      ))}
</MyPostContainer>
      <ContainerCard>
        <PostCardContainer />
      </ContainerCard>
    </Container>
  );
};

export default MainScreen;