import { Container, Content, Header, ContainerButton } from "./style";
import MyTitlePost from "../MyTitlePost";
import Button from "../Button";

export interface IPostProps {
  title: string;
  username: string;
  created_datetime: string;
  content: string;
}

const MyPost: React.FC<IPostProps> = ({
  title,
  username,
  content,
  created_datetime,
}) => {
  return (
    <Container>
      <Header>
       <MyTitlePost text="My frist Post"/>
     
         <ContainerButton>
          
        </ContainerButton>
      </Header>
      <Content>
        <label>{username}</label> <span>{created_datetime}</span>
        <p>{content}</p>
      </Content>
    </Container>
  );
};

export default MyPost;
