import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import NewLayout from './NewLayout';

const useStyles = makeStyles((theme) => ({
  loadMoreButton: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '40px',
    marginBottom: '60px',
  },
  scrollMarkerContainer: {
    position: 'relative',
  },
  scrollMarker: {
    position: 'absolute',
    top: '-70px',
    left: '0',
  },
}));

export default function FilmNewLayout(props) {
  const classes = useStyles();
  const { newList } = props;
  const [maxNewDisplay, setMaxNewDisplay] = React.useState(8);

  const LoadMoreButton = withStyles({
    root: {
      backgroundColor: 'transparent',
      borderRadius: '4px',
      border: '1px solid #aaa',
      color: '#aaa',
      height: '36px',
      width: '120px',
      cursor: 'pointer',
      '&:hover': {
        border: 'none',
        backgroundColor: '#f43f24',
        color: 'white',
      },
    },
    label: {
      textTransform: 'upcase',
      fontSize: '14px',
      fontWeight: '500',
    },
  })(Button);

  const handleLoadMoreButton = () => {
    if (newList.length > maxNewDisplay) {
      setMaxNewDisplay(maxNewDisplay + 8);

      var newsContainer = document.querySelector('#news-scroll');
      if (newsContainer !== null) {
        newsContainer.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      }
    }
  };

  return (
    <Container maxWidth='md'>
      <NewLayout newList={newList} maxNewDisplay={maxNewDisplay} />
      <div className={classes.scrollMarkerContainer}>
        <div className={classes.scrollMarker} id='news-scroll'></div>
      </div>
      <div className={classes.loadMoreButton}>
        {newList.length > maxNewDisplay && (
          <LoadMoreButton onClick={handleLoadMoreButton}>
            Xem Thêm
          </LoadMoreButton>
        )}
      </div>
    </Container>
  );
}

FilmNewLayout.propTypes = {
  newList: [
    PropTypes.shape({
      code: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      like: PropTypes.number,
      comment: PropTypes.number,
      imageSrc: PropTypes.string,
      link: PropTypes.string,
    }),
  ],
};

FilmNewLayout.defaultProps = {
  newList: [
    {
      code: '0001',
      title:
        'Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt: 48H đậm chất',
      description:
        'Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt đuổi gay cấn thót tim fans hâm mộ.',
      like: 0,
      comment: 0,
      imageSrc:
        'https://s3img.vcdn.vn/123phim/2021/03/an-dinh-chac-nich-ngay-khoi-chieu-16-04-ly-hai-tung-clip-lat-mat-48h-dam-chat-fast-furious-mien-song-nuoc-16170881088272.png',
      link:
        'https://tix.vn/goc-dien-anh/7965-an-dinh-chac-nich-ngay-khoi-chieu-16-04-ly-hai-tung-clip-lat-mat-48h-dam-chat',
    },
  ],
};
