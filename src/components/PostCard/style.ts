import styled from "styled-components";

export const media = {
  small: "@media (min-width: 320px) and (max-width: 420px)",
  medium: "@media (min-width: 421px) and (max-width: 798px)",
  large: "@media (min-width: 801px)"
};

export const Container = styled.div`
  box-sizing: border-box;
  width: 600px;
  height: 316px;
  background: #FFFFFF;
  border: 1px solid #999999;
  border-radius: 16px;
  margin-top: 15px; 

  ${media.large} {
    width: 75vw;
    margin-top: 10px;
  }

  ${media.small} {
    width: 100%;
    max-width: 500px;
    margin-top: 10px;
  }

  @media (max-width: 320px) {
    width: 90vw;
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
    padding: 5px;
    color: #777777;
    display: flex;
  }

  > span {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #777777;
    word-wrap: normal;
    display: flex;
    justify-content: flex-end;

    ${media.small} {
      font-size: 16px;
    }
  }

  > p {
    width: 100%;
    height: 164px;
    padding: 10px;
    font-size: 18px;
    line-height: 25px;
    word-wrap: break-word;

    ${media.small} {
      font-size: 16px;
    }
  }
`;
