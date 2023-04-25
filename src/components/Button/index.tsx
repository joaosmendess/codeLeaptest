import React from "react";

import { ButtonStyle } from "./style";

export enum ButtonType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  DANGER = "danger",
  SUBMIT = "submit",
  DELETE = "delete",
}

export interface IButtonProps {
  text: string;
  buttonType: ButtonType;
}
// nesse type agora, vc meio qe coloca se ele pode ser, de deletar, de dar submit

const Button: React.FC<IButtonProps> = ({ text, buttonType }) => {
  return (
    <ButtonStyle text={text} buttonType={buttonType}>
      {text}
    </ButtonStyle>
  );
};

export default Button;
