import React from "react";

import { ButtonStyle } from "./style";

export type ButtonType = "primary" | "secondary" |"danger" | "submit" | "delete";

export interface IButtonProps {
  text: string;
  buttonType: ButtonType;
  onClick: ()=> void;
  style?: any;
}
// nesse type agora, vc meio qe coloca se ele pode ser, de deletar, de dar submit

const Button: React.FC<IButtonProps> = ({ text, buttonType, onClick, style }) => {
  return (
    <ButtonStyle style={style} text={text} buttonType={buttonType} onClick={onClick}>
      {text}
    </ButtonStyle>
  );
};

export default Button;
