import styled from 'styled-components';

export const HeaderContainer = styled.header`
  /* background-color: #f4f4f4; */
  color: #05ca73;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Logo = styled.div`
  font-size: 42px;
  font-weight: bold;
`;

export const Button = styled.button`
  max-width: 200px;
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

  &:hover {
    background-color: #0056b3;
  }
`;
