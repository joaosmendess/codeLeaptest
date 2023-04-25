import React from "react";

import { Container, TitleText } from "./style";

interface ITitleProps {
  title: string;
}

const Title: React.FC<ITitleProps> = ({ title }) => {
  return (
    <Container>
      <TitleText title={title} />
      {/* aqui vc so escolhe um lugar pra colocar esse title */} 
    </Container>
  );
};

export default Title;
