import React from "react";

import { InputContainer, TitleInput, ContentInput, Label } from "./style";

interface InputProps {
  input?: boolean;
  textarea?: boolean;
  placeholder?: string;
  label?: string;
}

const Input2: React.FC<InputProps> = ({
  input,
  textarea,
  placeholder,
  label,
}) => {
  return (
    <InputContainer>
      {input && !textarea ? ( 
        <>
          <Label>{label}</Label>
          <TitleInput placeholder={placeholder}></TitleInput>
        </>
      ) : null}
      {textarea && !input ? (
        <>
          <Label>{label}</Label>
          <ContentInput placeholder={placeholder}></ContentInput>
        </>
      ) : null}
    </InputContainer>
  );
};

export default Input2;
