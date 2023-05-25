import React from "react";
import styled from "styled-components";

const media = {
  small: "@media (min-width: 359px) and (max-width: 428px)",
  medium: "@media (min-width: 421px) and (max-width: 798px)",
  large: "@media (min-width: 801)"
};

export interface ITitleProps {
  text: string;
  titleType: TitleType;
}

export type TitleType = "CT" | "MS" | "PC";

export const Container = styled.div<ITitleProps>`
  /* Add responsive styles here if needed */
`;

export const TitleText = styled.div<ITitleProps>`
  > h1 {
    white-space: nowrap;
    font-family: "Roboto";
  font-style: italic;
  font-weight: 700;
  font-size: 22px;
  line-height: 22px;
  
    display: flex;
    justify-content: ${(props) => {
      switch (props.titleType) {
        case "MS":
          return "center";
        case "CT": ""
        case "PC":
          return "baseline";
        default:
          return "initial";
      }
    }};
    margin: 0;
  }

  padding: ${(props) => {
    switch (props.titleType) {
      case "MS":
        return "30px";
      case "CT":
        return "15px";
      case "PC":
        return "20px";
      default:
        return "initial";
    }
  }};

  width: ${(props) => {
    switch (props.titleType) {
      case "MS":
        return "1300px";
      case "CT":
        return "100%";
      case "PC":
        return "100%";
      default:
        return "initial";
    }
  }};

  border-radius: ${(props) => {
    switch (props.titleType) {
      case "MS":
      case "CT":
        return "none";
      case "PC":
        return "16px 14px 0px 0px";
      default:
        return "initial";
    }
  }};

  
  
  

  color: ${(props) => {
    switch (props.titleType) {
      case "MS":
        return "#FFFF";
      case "CT":
        return "#000000";
      case "PC":
        return "#FFFF";
      default:
        return "initial";
    }
  }};

  background-color: ${(props) => {
    switch (props.titleType) {
      case "MS":
        return "#7695ec";
      case "CT":
        return "none";
      case "PC":
        return "#7695ec";
      default:
        return "initial";
    }
  }};

  ${media.small} {
    padding: ${(props) => {
      switch (props.titleType) {
        case "MS":
          return "25px";
        case "CT":
          return "18px";
        case "PC":
          return "15px";
        default:
          return "initial";
      }
    }};

    width: ${(props) => {
      switch (props.titleType) {
        case "MS":
          return "350px";
        case "CT":
          return "100%";
        case "PC":
          return "90vw";
        default:
          return "initial";
      }
    }};


max-width: ${(props) => {
      switch (props.titleType) {
       
        case "PC":
          return "430px";
        default:
          return "initial";
      }
    }};
  }

  ${media.medium} {
    width: ${(props) => {
      switch (props.titleType) {
        case "MS":
          return "550px";
        case "CT":
          return "50px";
        case "PC":
          return "100%";
        default:
          return "initial";
      }
    }};
  

    border-radius: ${(props) => {
      switch (props.titleType) {
        case "MS":
        case "CT":
          return "none";
        case "PC":
          return "16px";
        default:
          return "initial";
      }
    }};
  }

  ${media.large} {
    padding: ${(props) => {
      switch (props.titleType) {
        case "MS":
          return "30px";
        case "CT":
          return "23px";
        case "PC":
          return "20px";
        default:
          return "initial";
      }
    }};

    width: ${(props) => {
      switch (props.titleType) {
        case "MS":
          return "100%";
        case "CT":
          return "500px";
        case "PC":
          return "100%";
        default:
          return "initial";
      }
    }};

    border-radius: ${(props) => {
      switch (props.titleType) {
        case "MS":
        case "CT":
          return "none";
        case "PC":
          return "16px 14px 0px 0px";
        default:
          return "initial";
      }
    }};
  }
`;