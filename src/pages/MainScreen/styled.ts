import styled from "styled-components";

export const Container = styled.div`
  margin: 50% 20%;
  margin-top: 10px;
  width: 800px;
  height: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 768px) {
    margin: 10px;
    width: 100%;
    height: auto;
  }
`;

export const ContainerTitle = styled.div`
  background-color: red;

 
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 330px;
  width: 750px;
  padding: 0;
  margin-top: 2px;
  border: 1px solid;
  border-radius: 16px;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: right;
  padding: 15px;
  margin-right: 15px;
  min-width: 100px;
  max-width: 750px;
  max-height: 75px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-right: 0;
    margin-top: 10px;
  }
`;

export const ContainerCard = styled.div`
  padding: 10px;
`;
