import React from "react";

import { Container, TitleText } from "./style";

export interface ITitleProps {
  text: string;
}

const Title: React.FC<ITitleProps> = ({ text }) => {
  return (
    <Container text={text}>
      <TitleText>
        {text}
      </TitleText>
    </Container>
  );
};

export default Title;
