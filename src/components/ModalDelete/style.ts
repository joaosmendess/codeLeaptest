import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  background-color: #fff;
  width: 400px;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
`;

export const ModalHeader = styled.h3`
  margin-top: 0;
`;

export const ModalActions = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  
`;

export const ModalButton = styled.button`
  margin: 0 10px;
  padding: 10px 20px;
  border: none;
  background-color: #333;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
`;

