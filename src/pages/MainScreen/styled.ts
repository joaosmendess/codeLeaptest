import styled from "styled-components";

const media = {
  small: "@media (max-width: 420px)",
  medium: "@media (min-width: 421px) and (max-width: 768px)",
  large: "@media (max-width: 1024px)"
};

export const Container = styled.div`
  margin:  0 auto;
  width: 800px;
  height: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  

  ${media.medium} {
    margin: 0 auto;
    width: 600px;
    
    height: auto;
  }

  ${media.small} {
    
    margin: 0 auto;
    width: 90%;
  }
  ${media.large} {
    width: 50%;
   
  }
`;

export const ContainerTitle = styled.div`
  background-color: red;

  ${media.small} {
    /* Estilos para telas pequenas */
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 330px;
  width: 85%;
  padding: 0;
  margin-top: 2px;
  border: 1px solid;
  border-radius: 16px;

  ${media.medium} {
    width: 600px;
  }
  ${media.small} {
    width: 100%;
  }
  ${media.large} {
    width: 600px;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 15px;
  margin-right: 15px;
  min-width: 100px;
  max-width: 750px;
  max-height: 75px;

  ${media.medium} {
    flex-direction: column;
    align-items: center;
    margin-right: 0;
    margin-top: 10px;
  }

  ${media.small} {
    flex-direction: column;
    align-items: center;
    margin-right: 0;
    margin-top: 10px;
  }
`;

export const ContainerCard = styled.div`
  padding: 10px;

  ${media.small} {
    /* Estilos para telas pequenas */
  }
`;
