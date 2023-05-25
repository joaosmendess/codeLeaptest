import styled from "styled-components";

export const media = {
  small: "@media (min-width: 320px) and (max-width: 420px)",
  medium: "@media (min-width: 421px) and (max-width: 798px)",
  large: "@media (min-width: 801px)"
};

export const Container = styled.div`
  box-sizing: border-box;
  width: 752px;
  height: 316px;
  background: #FFFFFF;
  border: 1px solid #999999;
  border-radius: 16px;
  margin-top: 15px;

  ${media.large} {
    width: 75vw;
    margin: 25px auto;
  }

  ${media.medium} {
    width: 600px;
    margin: 15px auto;
  }

  ${media.small} {
    width: 90vw;
    max-width: 520px;
    margin: 15px auto;
  }
`;

export const Content = styled.div`
  padding: 0px;

  > label {
    width: 67.61px;
    height: 18px;
    font-style: normal;
    text-align: left;
    font-size: 18px;
    padding: 10px;
    color: #777777;
    margin-top:15px;
    display: flex;
  }

  > span {
    width: 148.74px;
    margin-left: 60.5vw;
    font-weight: 400;
    font-size: 18px;
   white-space: nowrap;
    
    color: #777777;
    display: flex;
    justify-content: flex-end;

    ${media.small} {
      margin-left: 0;
      text-align: right;
      margin-left: 45vw;
    }
    ${media.medium} {
     display: flex;
 width: 40px;
 margin-left: 70vw;
 
      
  
    }
    ${media.large} {
     display: flex;
 width: 40px;
 margin-left: 70vw;
 
      
  
    }
  }

  > p {
    width: 704px;
    height: 164px;
    padding: 10px;
    font-size: 18px;
    line-height: 25px;
    left: 608px;
    top: 590px;

    ${media.small} {
      width: 100%;
      font-size: 16px;
      left: 0;
      top: 0;
    }
  }
`;

export const Header = styled.div`
  border-top-left-radius: 5px;
`;

export const ContainerButton = styled.button``;
