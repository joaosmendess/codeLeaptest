import styled from "styled-components";

const media = {
  small: "@media (max-width: 320px)",
  medium: "@media (min-width: 421px) and (max-width: 768px)",
  large: "@media (min-width: 769px)"
};

export const Container = styled.div`
  padding: 20px;
  background-color: #7695ec;
  color: #FFFFFF;
  border-radius: 16px 16px 0px 0px;
  font-size: 12px;
  width: 750px;
 

  ${media.medium} {
    padding: 15px;
    font-size: 10px;
    width: 100%;
    max-width: 700px;
  }
  ${media.large} {
    padding: 15px;
    font-size: 10px;
    width: 100%;
    max-width: 700px;
  }
`;

export const TitleText = styled.div``;

export const SpanDiv = styled.div`
  display: flex;
  justify-content: space-between;

  > h1 {
    display: flex;
  }

  > span {
    display: flex;
    justify-content: flex-start;
  }

  > svg {
    
    display: flex;
    justify-content: flex-end;
  }

  ${media.medium} {
    flex-direction: row;

    > h1 {
      margin-bottom: 10px;
    }

    > span {
      justify-content: flex-start;
    }
    >svg{
      display: flex;
      justify-content: baseline;
      
    }
  }
`;

export const ButtonModal = styled.button``;
