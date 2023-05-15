import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  width: 752px;
  height: 316px;
  background: #FFFFFF;
  border: 1px solid #999999;
  border-radius: 16px;
  margin-top: 15px;

  @media only screen and (max-width: 768px) {
    width: 650px;
    height: auto;
    padding: 0 ;
  }
`;

export const Header = styled.div`
  border-top-left-radius: 5px;
`;

export const Content = styled.div`
  padding: 15px;

  > label {
    width: 67.61px;
    height: 18px;
    font-style: normal;
    text-align: left;
    font-size: 18px;
    padding: 10px;
    color: #777777;
  }

  > span {
    width: 148.74px;
    margin-left: 390px;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #777777;

    @media only screen and (max-width: 768px) {
      margin-left: 0;
      margin-top: 10px;
      text-align: center;
      width: 100%;
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

    @media only screen and (max-width: 768px) {
      width: 100%;
      margin-top: 10px;
    }
  }

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
