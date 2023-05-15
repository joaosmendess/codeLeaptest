import styled from "styled-components";

export const ModalContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const ModalBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  bottom: 0;
  left: 0;
  position: relative;
  right: 0;
  top: 0px;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  max-width: 600px;
  padding: 20px;
  position: relative;
  z-index: 999; /* valor alto para aparecer por cima */
`;

export const ModalHeader = styled.h2`
  font-size: 24px;
  margin: 0 0 20px;
`;

export const ModalForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
`;

export const ModalInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 10px;
  padding: 10px;
`;

export const ModalTextarea = styled.textarea`
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  height: 200px;
  margin-bottom: 10px;
  padding: 10px;
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ModalButton = styled.button`
  background-color: #0077c2;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  margin-left: 10px;
  padding: 10px 20px;

  &:first-child {
    margin-left: 0;
  }
`;
