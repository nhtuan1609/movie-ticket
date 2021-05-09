import React, { useEffect } from 'react';
import { Box, Container } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';

import MyCarousel from '../../components/carousel';
import MovieFilter from '../../components/movie-filter';
import MovieCardSlider from '../../components/movie-list';
import CinemaBlock from '../../components/cinema-block';
import NewBlock from '../../components/new-block';
import AppBlock from '../../components/app-block';

import MovieAction from '../../redux/action/movie';

export default function HomePage() {
  const movieList = useSelector((state) => state.movie.list);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(MovieAction.fetchList());
  }, [dispatch]);
  if (movieList.length === 0) return <p>Loading..</p>;

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
        <MovieFilter movieList={movieList} />
      </Box>
      <div id='lich-chieu'>
        <Container maxWidth='md'>
          <MovieCardSlider
            movieRelease={movieRelease}
            movieUpcoming={movieUpcoming}
          />
        </Container>
      </div>
      <div id='cum-rap'>
        <CinemaBlock />
      </div>
      <div id='tin-tuc'>
        <NewBlock />
      </div>
      <div id='ung-dung'>
        <AppBlock />
      </div>
    </div>
  );
}
