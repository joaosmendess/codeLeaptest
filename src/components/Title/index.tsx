import React from "react";

import { Container, TitleText } from "./style";

export interface ITitleProps {
  text: string;
  titleType: TitleType;
}
export enum TitleType {
  MS= "mainScreenTitle",
  CT= "contentTitle" 
}
const Title: React.FC<ITitleProps> = ({ text , titleType}) => {
  return (
    <Container text={text} titleType={titleType}>
      <TitleText text={text} titleType={titleType}>
        {text}
      </TitleText>
    </Container>
  );
};

export default Title;
