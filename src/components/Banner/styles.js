import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  position: relative;
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const Button = styled.button`
  background-color: #007BFF;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;

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
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
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
`;

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const SubmitButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #218838;
  }
`;

export const BannerContainer = styled.div`
  width: 100%;
  height: 300px;  // Altura fixa para o banner
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 200px;  // Ajusta a altura em telas menores
  }

  @media (max-width: 480px) {
    height: 150px;  // Ajusta a altura para telas ainda menores
  }
`;

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;  // Garante que a imagem cubra todo o container sem distorcer
`;
