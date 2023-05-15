import styled from "styled-components";
import { IButtonProps, ButtonType } from "./index";

export const Container = styled.div`
  display: flex;
`;

export const ButtonStyle = styled.button<IButtonProps>`
  width: 120px;
  border-radius: 8px;
  height: 32px;
  color: white;

  font-family: Roboto;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: center;

  background-color: ${(props) => {
    switch (props.buttonType) {
      case "primary":
        return "#7695ec";
      case "secondary":
        return "#28a745";
      case "danger":
        return "#dc3545";
      default:
        return "#cccccc";
    }
  }};

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;





