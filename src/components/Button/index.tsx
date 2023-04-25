import React from "react";

import {Container} from './style'

interface IButtonProps {
  
  title : string;

  
  
}

const Button: React.FC <IButtonProps> = ({ 
   title 
  
  }) => { 
  return (
    <Container>
    <button 
    title={title}

    > <h1>{title}</h1>   </button> 
   
   
    </Container>
  );
}

export default Button;