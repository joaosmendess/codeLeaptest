import React from "react";
import { Container, Content, Header } from "./style";

import Title from "../Title";

export interface IPostCardProps {
  username: string;
  title: string;
  content: string;
  created_datetime: string;
}

const PostCard: React.FC<IPostCardProps> = ({
  username,
  title,
  content,
  created_datetime,
}) => {
  return (
    <Container>
      <Header> 
        <Title text={title} titleType="PC" />
       
        
        </Header>
      <Content>
        <label>{username}</label> <span>{created_datetime}</span>
        <p>{content}</p>
      </Content>
    </Container>
  );
};

export default PostCard;
