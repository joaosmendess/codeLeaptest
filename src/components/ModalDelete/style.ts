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
  width: 660px;
  padding: 20px;
  border-radius: 8px;
  text-align: left;
  position: relative;
`;

export const ModalHeader = styled.h3`
  margin-top: 0;
`;

export const ModalActions = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: end;
  
`;

export const ModalDeleteButton = styled.button`
 
  border: none;
  width: 120px;
  background-color: #FF5151;
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
`;


export const ModalCancelButton = styled.button`
  margin: 0 10px;
  padding: 10px 20px;
  border: 1px solid #999999;
  width: 120px;
  background-color: #FFFFFF;
  color: #000000;
  
  border-radius: 4px;
  cursor: pointer;
`;
