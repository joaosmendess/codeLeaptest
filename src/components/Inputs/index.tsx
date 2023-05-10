import React, { forwardRef } from "react";
import { InputContainer, TitleInput, ContentInput, Label } from "./style";

export interface InputProps {
  input?: boolean;
  textarea?: boolean;
  placeholder?: string;
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
  ({ input, textarea, placeholder, label, onChange }, ref) => {
    return (
      <InputContainer>
        {input && !textarea ? (
          <>
            <Label>{label}</Label>
            <TitleInput
              ref={ref as React.RefObject<HTMLInputElement>}
              placeholder={placeholder}
              onChange={onChange}
            ></TitleInput>
          </>
        ) : null}
        {textarea && !input ? (
          <>
            <Label>{label}</Label>
            <ContentInput
              ref={ref as React.RefObject<HTMLTextAreaElement>}
              placeholder={placeholder}
              onChange={onChange}
            ></ContentInput>
          </>
        ) : null}
      </InputContainer>
    );
  }
);

export default Input;
