import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
  background-color: #7695ec;
  color: #FFFFFF;
  border-radius: 16px 16px 0px 0px;
  font-size: 12px;
  width: 750px;

  @media (max-width: 768px) {
    padding: 5px;
    
    font-size: 10px;
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
    justify-content: flex-end;
  }

  > svg {
    width: 10px;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    > h1 {
      margin-bottom: 10px;
    }

    > span {
      justify-content: flex-start;
    }
  }

  
`

export const ButtonModal = styled.button `





`

;