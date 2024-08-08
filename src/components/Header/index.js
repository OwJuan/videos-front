import React, { useState } from 'react';
import { Logo, HeaderContainer, Button } from './styles';
import FormVideo from '../FormVideo';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <HeaderContainer>
      <Logo>VideoFlix</Logo>
      <Button onClick={openModal}>Cadastrar Videos</Button>
      <FormVideo isOpen={isModalOpen} onClose={closeModal} />
    </HeaderContainer>
  );
}