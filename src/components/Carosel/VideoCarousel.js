import React, { useState } from 'react';
import { CarrosselContainer, CarrosselLista, CarrosselItem, CarrosselControles, Before, Next } from './styles';

const fallbackImage = 'https://cdn-icons-png.flaticon.com/512/1627/1627224.png';

const VideoCarousel = ({ videos }) => {
  const categorias = {};

  videos.forEach((video) => {
    if (!categorias[video.category]) {
      categorias[video.category] = [];
    }
    categorias[video.category].push(video);
  });

  return (
    <div>
      {Object.keys(categorias).map((categoria) => (
        <CarrosselContainer key={categoria}>
          <h2>{categoria}</h2>
          <CarrosselLista>
            {categorias[categoria].map((video) => (
              <CarrosselItem key={video.id}>
                <img src={video.thumbnail}
                  alt={video.title}
                  onError={(e) => {
                    e.target.src = fallbackImage;
                  }} />
                <p>{video.title}</p>
              </CarrosselItem>
            ))}
          </CarrosselLista>
          <CarrosselControles>
            <Before>Anterior</Before>
            <Next>Próximo</Next>
          </CarrosselControles>
        </CarrosselContainer>
      ))}
    </div>
  );
};

export default VideoCarousel;