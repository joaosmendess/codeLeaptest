import styled from "styled-components";

export const media = {
  small: "@media (max-width: 420px)",
  medium: "@media (min-width: 421px) and (max-width: 798px)",
  large: "@media (min-width: 1350px)"
};

export const Container = styled.div`
  margin: 0 auto;
  width: 800px;
  height: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.medium} {
    width: 600px;
    height: auto;
  }

  ${media.small} {
    width: 90%;
  }

  ${media.large} {
    width: 100%;
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
    width: 55%;
  }

  ${media.small} {
    width: 100%;
  }

  ${media.large} {
    width: 670px;
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
