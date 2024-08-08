import React from 'react';
import { BannerContainer, BannerImage } from './styles';

export default function Banner({ imageUrl }) {
  return (
    <BannerContainer>
      <BannerImage src={imageUrl} alt="Banner" />
    </BannerContainer>
  );
}