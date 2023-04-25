import styled from "styled-components";
import { ITitleProps } from "./index";
export const Container = styled.div<ITitleProps>`
  background-color: ${(props) => props.theme.color.primary};
  width: 800px;
  height: 80px;
`;

export const TitleText = styled.h1`
  color: ${(props) => props.theme.color.secondary};
  padding: 20px;
  height: 700;
  size: 20px;
`;
