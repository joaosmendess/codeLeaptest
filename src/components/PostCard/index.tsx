
import { Container, Content, Header } from "./style";
import Title from "../Title";
import {   IJob } from '../../redux/types';


interface IPostCardProps extends IJob {}



const PostCard: React.FC<IPostCardProps> = ({
  id,
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

