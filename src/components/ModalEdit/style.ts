import styled from "styled-components";

export const ModalContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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
  border-radius: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
 width: 660px;
  padding: 20px;
  margin: 335px;
  bottom: 50px;
  position: relative;

`;

export const ModalHeader = styled.h2`
  font-size: 24px;
  margin: 0 0 20px;
`;

export const ModalForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  >label {
    padding: 5px;
  }
`;

export const ModalInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 612px;
  font-size: 16px;
  margin-bottom: 10px;
  padding: 10px;
  
`;

export const ModalTextarea = styled.textarea`
  border: 1px solid #ccc;
  border-radius: 8px;
  max-width: 635px;
  font-size: 16px;
  height: 74px;
  margin-bottom: 10px;
  padding: 10px;
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ModalSaveButton = styled.button`
  background-color: #47B960;
width: 120px;
  border: none;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  margin-left: 10px;
  padding: 10px 20px;

  &:first-child {
    margin-left: 0;
  }
`;




export const ModalCancelButton = styled.button`
  background-color: #FFFFFF;
  width: 120px;
  border: 1px solid #000000;
  border-radius: 8px;
  color: #000000;
  cursor: pointer;
  font-size: 16px;
  margin-left: 10px;
  padding: 10px 20px;

  &:first-child {
    margin-left: 0;
  }
`;
