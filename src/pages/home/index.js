import React from 'react';
import { Box, Container } from '@material-ui/core';

import MyCarousel from '../../components/carousel';
import HomeTool from '../../components/home-tool';
import MovieCardSlider from '../../components/movie-list';

export default function HomePage() {
  return (
    <div>
      <MyCarousel />
      <Box position='relative'>
        <HomeTool />
      </Box>
      <div id='lich-chieu' style={{ backgroundColor: 'white' }}>
        <Container maxWidth='md' style={{ marginTop: '100px' }}>
          <MovieCardSlider />
        </Container>
      </div>
      <div
        id='cum-rap'
        style={{ height: '1000px', backgroundColor: 'yellow', opacity: '0.3' }}
      ></div>
      <div
        id='tin-tuc'
        style={{ height: '1000px', backgroundColor: 'green', opacity: '0.3' }}
      ></div>
      <div
        id='ung-dung'
        style={{ height: '1000px', backgroundColor: 'blue', opacity: '0.3' }}
      ></div>
    </div>
  );
}
