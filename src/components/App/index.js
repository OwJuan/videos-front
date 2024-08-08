
import GlobalStyles from '../../Assets/global';

import axios from 'axios';

import Banner from '../Banner';
import Carrossel from '../Carosel';

import Header from '../Header/index';
import { Container } from './styles';
import { useCallback, useEffect, useState } from 'react';


function App() {
  const [videos, setVideos] = useState([]);
  const bannerImageUrl = "https://images3.alphacoders.com/199/199197.jpg";

  const loadVideo = useCallback(async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/videos', {});
      setVideos(response.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    loadVideo();
  }, []);
  
  return (
    <>
    <GlobalStyles />
    <Container >
      <Header />
      <Banner imageUrl={bannerImageUrl} />
      <Carrossel videos={videos} />
    </Container>
    </>
  );
}

export default App;