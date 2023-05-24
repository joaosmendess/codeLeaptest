import React from "react";
import styled from "styled-components";

const media = {
  small: "@media (min-width: 375px) and (max-width: 419px)",
  medium: "@media (min-width: 421px) and (max-width: 790px)",
  large: "@media (min-width: 1350px)"
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
    display: flex;
    justify-content: ${(props) => {
      switch (props.titleType) {
        case "MS":
          return "center";
        case "CT":
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
        return "16px 16px 0px 0px";
      default:
        return "initial";
    }
  }};

  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 26px;

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
          return "350px";
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
          return "100vh";
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
          return "16px 16px 0px 0px";
        default:
          return "initial";
      }
    }};
  }
`;