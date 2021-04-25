import React, { useEffect } from 'react';
import { Box, Container } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';

import MyCarousel from '../../components/carousel';
import HomeTool from '../../components/home-tool';
import MovieCardSlider from '../../components/movie-list';
import MovieAction from '../../redux/action/movie';

export default function HomePage() {
  const movieList = useSelector((state) => state.movie.list);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(MovieAction.fetchList());
  }, [dispatch]);
  if (movieList.length === 0) return <p>Loading..</p>;
  console.log(movieList);

  let breakDate = new Date('2020-01-01T00:00:00');

  var movieRelease = movieList.filter((item, index) => {
    let itemDate = new Date(item.ngayKhoiChieu);
    return itemDate > breakDate;
  });

  var movieUpcoming = movieList.filter((item, index) => {
    let itemDate = new Date(item.ngayKhoiChieu);
    return itemDate <= breakDate;
  });

  return (
    <div>
      <MyCarousel />
      <Box position='relative'>
        <HomeTool />
      </Box>
      <div id='lich-chieu' style={{ backgroundColor: 'white' }}>
        <Container maxWidth='md'>
          <MovieCardSlider
            movieRelease={movieRelease}
            movieUpcoming={movieUpcoming}
          />
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
