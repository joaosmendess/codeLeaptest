import styled from "styled-components";
import { ITitleProps, TitleType } from "./index";
export const Container = styled.div<ITitleProps>`



`;

export const TitleText = styled.div <ITitleProps>`
 padding: ${(props) => {
    switch (props.titleType) {
      case 'MS':
        return  "25px" 
        ;
        case 'CT':
          return "23px";
        case 'PC':
          return  "20px;"
      }
  }}; 
  
  

 width:${(props) => {
    switch (props.titleType) {
      case 'MS':
        return  "800px" 
        ;
        case 'CT':
          return "none";
        case 'PC':
          return  "752px;"
      }
  }}; ;


 
 border-radius: ${(props) => {
    switch (props.titleType) {
      case 'MS':
        return  "none" 
        ;
        case 'CT':
          return "none";
        case 'PC':
          return  " 16px 16px 0px 0px;"
      }
  }};

 
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 26px;
 
 
 color:${(props) => {
    switch (props.titleType) {
      case 'MS':
        return  "#FFFF" 
        ;
      case 'CT':
        return "#000000";
        case 'PC':
          return  "#FFFF"
      }
  }};

  

  background-color: ${(props) => {
    switch (props.titleType) {
      case 'MS':
        return "#7695ec"
      case 'CT':
        return "none";
        case 'PC':
          return "#7695ec"
      }
  }};
`;

