import styled from "styled-components";



export const TitleInput = styled.input`
  border: 1px solid #cccccc;
  min-width: 452px;
  max-width: 704px;
  height: 32px;
  border-radius: 8px;
  padding: 3px;

  @media (max-width: 768px) {
    max-width: 100%;
    width: 100%;
  }
`;

export const ContentInput = styled.textarea`
  border: 1px solid #cccccc;
  width: 704px;
  min-width: 100px;
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

  @media (max-width: 768px) {
    max-width: 700%;
    width: 100%;
  }
`;


/* media query para telas menores que 768px */
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  @media (max-width: 768px) {
    padding: 5px;
  }
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 16px;
  }
`;