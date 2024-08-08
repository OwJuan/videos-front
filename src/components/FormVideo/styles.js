import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 20px 32px;
  border-radius: 10px;
  width: 400px;
  height: auto;
  max-width: 90%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  margin-top: 10px;
  width: 100%;
  border: none;
  background: #fff;
  border: 2px solid #ccc;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  height: 52px;
  border-radius: 4px;
  outline: none;
  padding: 0 16px;
  font-size: 16px;
  transition: border-color 0.2s ease-in;
  appearance: none;
`;

export const TextArea = styled.textarea`
  margin-top: 10px;
  width: 100%;
  border: none;
  background: #fff;
  border: 2px solid #ccc;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  height: 72px; 
  border-radius: 4px;
  outline: none;
  padding: 10px 16px;
  font-size: 16px;
  transition: border-color 0.2s ease-in;
  appearance: none;
  resize: none; 
  overflow-y: hidden; 
  max-height: 78px; 
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 40px;
  background: #05ca73;
  padding: 0.5rem;
  color: #121212;
  text-decoration: none;
  text-transform: uppercase;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-weight: bold;
  border-radius: 7px;
  position: relative;
  border: none;
  transition: 0.5s all;
  margin-top: 10px;

  &:hover {
    background-color: #218838;
  }
`;