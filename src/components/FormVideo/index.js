import React, { useState } from 'react';
import axios from 'axios';
import { ModalContainer, ModalContent, CloseButton, FormContainer, Input, SubmitButton, TextArea } from './styles';
import { toast, ToastContainer } from 'react-toastify';

export default function FormVideo({ isOpen, onClose }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/videos', {
        title,
        description,
        category,
        thumbnail,
        url,
      });
      console.log(response.data);
      onClose()
      resetForm()
    } catch (error) {
      console.error(error);
    }
  };

  const resetForm = () => {
    setTitle('');
    setCategory('');
    setUrl('');
    setDescription('');
    setThumbnail('');
  };

  const handleClose = () => {
    onClose()
    resetForm()
  }

  if (!isOpen) {
    return null;
  }

  return (
    <ModalContainer>
      <ToastContainer />
      <ModalContent>
        {/* <CloseButton onClick={onClose}>Fechar</CloseButton> */}
        <FormContainer>
          <h2>Cadastro</h2>
          <form onSubmit={handleSubmit}>
            <label>
              <Input
                type="text"
                name="title"
                placeholder="Titulo"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </label>
            <label>
              <Input
                type="text"
                name="category"
                placeholder="Categoria do video"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
              />
            </label>
            <label>
              <Input
                type="text"
                name="url"
                placeholder="Url do Video"
                value={url}
                onChange={(event) => setUrl(event.target.value)}
              />
            </label>
            <label>
              <TextArea
                name="description"
                placeholder="Descrição"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </label>
            <label>
              <Input
                type="text"
                name="thumbnail"
                placeholder="Thumbnail"
                value={thumbnail}
                onChange={(event) => setThumbnail(event.target.value)}
              />
            </label>
            <SubmitButton type="submit">Enviar</SubmitButton>
            <SubmitButton type="button" onClick={handleClose}>Cancelar</SubmitButton>
          </form>
        </FormContainer>
      </ModalContent>
    </ModalContainer>
  );
}