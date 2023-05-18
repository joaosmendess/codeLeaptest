import styled from "styled-components";

const media = {
  small: '@media (min-width: 320px)',
  medium: '@media (min-width: 421px) and (max-width: 768px)',
  large: '@media (min-width: 769px)',
};

export const TitleInput = styled.input`
  border: 1px solid #cccccc;
  min-width: 425px;
  max-width: 704px;
  height: 32px;
  border-radius: 8px;
  padding: 3px;

 
`;

export const ContentInput = styled.textarea`
  border: 1px solid #cccccc;
  width: 710px;
  min-width: 105px;
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

  ${media.small} {
    
    max-width: 575px;
    max-height: 85px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  ${media.small} {
    padding: 10px;
  }
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;

  ${media.small} {
    font-size: 16px;
    line-height: 19px;
  }
`;
