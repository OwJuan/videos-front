import React from 'react';
import VideoCarousel from './VideoCarousel';

const Carrossel = ({ videos }) => {
  return (
    <div>
      <VideoCarousel videos={videos} />
    </div>
  );
};

export default Carrossel;