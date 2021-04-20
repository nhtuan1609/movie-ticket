import React from 'react';
import { Box } from '@material-ui/core';

import NavHeader from '../../components/header';
import MyCarousel from '../../components/carousel';
import HoomTool from '../../components/home-tool';

export default function HomePage() {
  const [currentLocation, setCurrentLocation] = React.useState('Hồ Chí Minh');
  const isLogin = false;

  return (
    <Box>
      <NavHeader
        isLogin={isLogin}
        currentLocation={currentLocation}
        setCurrentLocation={setCurrentLocation}
      />
      <Box marginTop='60px'></Box>
      <MyCarousel />
      <Box position='relative'>
        <HoomTool />
      </Box>
      <Box
        id='lich-chieu'
        style={{ height: '1000px', backgroundColor: 'red', opacity: '0.3' }}
      ></Box>
      <Box
        id='cum-rap'
        style={{ height: '1000px', backgroundColor: 'yellow', opacity: '0.3' }}
      ></Box>
      <Box
        id='tin-tuc'
        style={{ height: '1000px', backgroundColor: 'green', opacity: '0.3' }}
      ></Box>
      <Box
        id='ung-dung'
        style={{ height: '1000px', backgroundColor: 'blue', opacity: '0.3' }}
      ></Box>
    </Box>
  );
}
