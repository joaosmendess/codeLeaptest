import styled from "styled-components";
import { ITitleProps, TitleType } from "./index";
export const Container = styled.div<ITitleProps>`

  width: 800px;
  height: 80px;
`;

export const TitleText = styled.h1 <ITitleProps>`
 
 padding:21px;
 
 
 
 
 
 color:${(props) => {
    switch (props.titleType) {
      case TitleType.MS:
        return  "#FFFF" 
        ;
      case TitleType.CT:
        return "#000000";
      }
  }};

  

  background-color: ${(props) => {
    switch (props.titleType) {
      case TitleType.MS:
        return "#7695ec"
      case TitleType.CT:
        return "none";
      }
  }};
`;

