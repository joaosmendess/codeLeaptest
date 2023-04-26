import React from "react";

import {Container, Content, DivButtonLogin, DivTitle  } from "./style";

import Title, { TitleType } from "../../components/Title";
import Input from "../../components/Inputs";
import Button, { ButtonType } from "../../components/Button";

const Login: React.FC = ({
 
}) => {
  return (

    <Container>
      <DivTitle>
      <Title text="Welcome to CodeLeap network!" titleType={TitleType.CT}/>
      </DivTitle>
      <Content>
       <Input input= {true} label="Please enter your username" 
       placeholder="John doe"/>
      </Content>
      <DivButtonLogin>
      <Button buttonType={ButtonType.PRIMARY} text="ENTER"/>
      </DivButtonLogin>
    </Container>
        
   
  );
};

export default Login;