import React, { useEffect } from 'react';
import { Box, Container } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';

import MyCarousel from '../../components/carousel';
import FilterBlock from '../../components/filter-block';
import MovieBlock from '../../components/movie-block';
import CinemaBlock from '../../components/cinema-block';
import NewBlock from '../../components/new-block';
import AppBlock from '../../components/app-block';
import FadeLoading from '../../components/fade-loading';

import MovieAction from '../../redux/action/movie';

export default function HomePage() {
  const movieList = useSelector((state) => state.movie.list);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(MovieAction.fetchList());
  }, [dispatch]);
  if (movieList.length === 0) return <FadeLoading />;

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
        <FilterBlock movieList={movieList} />
      </Box>
      <div id='lich-chieu'>
        <Container maxWidth='md'>
          <MovieBlock
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
