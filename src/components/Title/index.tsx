import React from "react";

import { Container, TitleText } from "./style";

import Button from "../Button";

export interface ITitleProps {
  text: string;
  titleType: TitleType;
}
export type TitleType = 'CT' | 'MS' | 'PC'
const Title: React.FC<ITitleProps> = ({ text , titleType}) => {
  return (
    <Container text={text} titleType={titleType}>
      <TitleText text={text} titleType={titleType}>
        <h1>{text}</h1>
        
        
      </TitleText>
    </Container>
  );
};

export default Title;
