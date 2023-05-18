import styled from "styled-components";
const media = {
  small: '@media (min-width: 320px)',
  medium: '@media (min-width: 421px) and (max-width: 768px)',
  large: '@media (min-width: 769px)',
};
export const Container = styled.div`
  box-sizing: border-box;
  width: 752px;
  height: 316px;
  background: #FFFFFF;
  border: 1px solid #999999;
  border-radius: 16px;
  margin-top: 15px;

  ${media.small} {
    max-width: 600px;
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
    width: 148.74px;
    margin-left: 350px;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #777777;
    word-wrap: normal;
    display: flex;
${media.small} {
 font-size: 18px;
margin-left: 75%;

word-wrap: normal;
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
    word-wrap:break-word ;

  ${media.small} {
    width: 440px;
    font-size: 18px;
    line-height: 25px;
    font-size: 17px;
    padding: 18px;
  }
  }

 
`;
