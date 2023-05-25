import styled from "styled-components";

const media = {
  small: "@media (min-width: 320px)",
  medium: "@media (min-width: 421px) and (max-width: 799px)",
  large: "@media (min-width: 801px)"
};

export const TitleInput = styled.input`
  border: 1px solid #cccccc;
  min-width: 320px;
  
  height: 32px;
  border-radius: 8px;
  padding: 3px;

  ${media.medium} {
  max-width: 70vw;
  }

  ${media.large} {
width: 70vw;
  }
 
`;

export const ContentInput = styled.textarea`
  border: 1px solid #cccccc;
  width: 100%;
  min-width: 105px;
  
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
    max-width: 335px;
    max-height: 75px;
  }

  ${media.medium} {
    height: 130px;
    max-width: 575px;
    max-height: 130px;
  }
  ${media.large} {
   max-width: 73vw;
  height: 65px;
  
  
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  ${media.small} {
    padding: 5px;
  }
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;

  ${media.small} {
    font-size: 14px;
  }
`;
