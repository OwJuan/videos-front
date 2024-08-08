import styled from 'styled-components';

export const CarrosselContainer = styled.div`
  position: relative;
  max-width: 1200px; 
  margin: 40px auto; 
  padding: 20px;
  overflow: hidden;

  h2 {
    margin-top: 10px;
    margin-left: 10px;
    font-size: 32px;
    font-weight: bold;
    color: #05ca73;
  }

  p{
    margin-top: 10px;
    margin-left: 10px;
    font-size: 16px;
    font-weight: 400;
    color: #05ca73;
  }
`;

export const CarrosselLista = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap; 
  justify-content: center; 
  transition: transform 0.5s ease-in-out;
`;

export const CarrosselItem = styled.li`
  margin: 10px; 
  flex: 0 0 25%; 
  background-size: cover;
  background-position: center;
  flex-shrink: 0;

  img {
    width: 100%; /* changed width to 100% to make it responsive */
    height: 150px;
    object-fit: cover; /* added object-fit to make the image scale */
    border-radius: 10px; 
  }
`;

export const CarrosselControles = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

export const Before = styled.button`
  background-color: transparent;
  border: none;
  color: #05ca73;
  cursor: pointer;
`;

export const Next = styled.button`
  background-color: transparent;
  border: none;
  color: #05ca73;
  cursor: pointer;
`;