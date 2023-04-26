import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
padding: 10px;

`;

export const TitleInput = styled.input`
  border: 1px solid #cccccc;
  width: 704px;
  height: 32px;
  border-radius: 8px;
  padding: 2px;
`;

export const ContentInput = styled.textarea`
  border: 1px solid #cccccc;
  width: 704px;
  max-width: 730px;
  height: 74px;
  max-height: 90px;
  border-radius: 8px;

  ::placeholder {
    position: absolute;
    top: 0;
    left: 0;
    padding: 2px;
  }
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
`;
