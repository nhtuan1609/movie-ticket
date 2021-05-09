import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

const useStyles = makeStyles((theme) => ({
  largeCardContainer: {
    backgroundColor: 'white',
    marginBottom: '10px',
  },
  largeCardImageContainer: {
    position: 'relative',
    paddingTop: '55%',
    borderRadius: '4px',
    overflow: 'hidden',
  },
  largeCardImage: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
  },
  largeCardBody: {
    position: 'relative',
  },
  largeCardTitle: {
    textDecoration: 'none',
    width: '100%',
    height: '50px',
    color: theme.palette.textColor.main,
    fontSize: '18px',
    fontWeight: '500',
    marginTop: '8px',
    transition: 'color 0.2s',
    '&:hover': {
      color: theme.palette.primary.main,
    },
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-line-clamp': '2',
    '-webkit-box-orient': 'vertical',
    textAlign: 'justify',
  },
  largeCardDescription: {
    width: '100%',
    height: '56px',
    color: theme.palette.textColor.light,
    fontSize: '14px',
    marginBottom: '16px',
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-line-clamp': '3',
    '-webkit-box-orient': 'vertical',
    textAlign: 'justify',
  },
  largeCardFooter: {
    display: 'flex',
    alignItems: 'center',
  },
  largeCardFooterItem: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '30px',
    userSelect: 'none',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  largeCardFooterItemIcon: {
    color: theme.palette.textColor.bright,
  },
  largeCardFooterItemValue: {
    color: theme.palette.textColor.bright,
    display: 'inline-block',
    marginLeft: '6px',
  },
  smallCardContainer: {
    backgroundColor: 'white',
    marginBottom: '10px',
    display: 'flex',
  },
  smallCardImageContainer: {
    width: '50px',
    height: '50px',
    borderRadius: '4px',
    overflow: 'hidden',
  },
  smallCardImage: {
    width: '100%',
    height: '100%',
  },
  smallCardTitle: {
    flex: '1',
    textDecoration: 'none',
    height: '40px',
    color: theme.palette.textColor.light,
    fontSize: '16px',
    fontWeight: '500',
    transition: 'color 0.2s',
    marginLeft: '10px',
    '&:hover': {
      color: theme.palette.primary.main,
    },
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-line-clamp': '2',
    '-webkit-box-orient': 'vertical',
    textAlign: 'justify',
  },
}));

export default function NewLayout(props) {
  const classes = useStyles();
  const { newList, maxNewDisplay } = props;

  const renderLargeCard = (item) => (
    <div className={classes.largeCardContainer}>
      {/* Card header */}
      <div className={classes.largeCardImageContainer}>
        <a href={item.link}>
          <img
            className={classes.largeCardImage}
            src={item.imageSrc}
            alt={item.title}
          ></img>
        </a>
      </div>
      {/* Card body */}
      <div className={classes.largeCardBody}>
        <a className={classes.largeCardTitle} href={item.link}>
          {item.title}
        </a>
        <div className={classes.largeCardDescription}>{item.description}</div>
      </div>
      {/* Card footer */}
      <div className={classes.largeCardFooter}>
        <div className={classes.largeCardFooterItem}>
          <ThumbUpAltOutlinedIcon className={classes.largeCardFooterItemIcon} />
          <span className={classes.largeCardFooterItemValue}>{item.like}</span>
        </div>
        <div className={classes.largeCardFooterItem}>
          <ChatBubbleOutlineIcon className={classes.largeCardFooterItemIcon} />
          <span className={classes.largeCardFooterItemValue}>
            {item.comment}
          </span>
        </div>
      </div>
    </div>
  );

  const renderSmallCard = (item) => (
    <div className={classes.smallCardContainer}>
      {/* Card image */}
      <div className={classes.smallCardImageContainer}>
        <a href={item.link}>
          <img
            className={classes.smallCardImage}
            src={item.imageSrc}
            alt={item.title}
          ></img>
        </a>
      </div>
      {/* Card title */}
      <a className={classes.smallCardTitle} href={item.link}>
        {item.title}
      </a>
    </div>
  );

  const renderNewList = (newList, maxNewDisplay) => {
    let limitedNewList = newList.slice(0, maxNewDisplay);
    let newLength = limitedNewList.length;
    let newListLayout = [];
    let loopCount = 0;
    do {
      newListLayout = [
        ...newListLayout,
        limitedNewList.slice(loopCount * 8, (loopCount + 1) * 8),
      ];
      newLength -= 8;
      loopCount++;
    } while (newLength > 0);

    return (
      <Fragment>
        {newListLayout.map((item, index) => (
          <Fragment>
            <Grid item md={6} xs={12}>
              {item[0] !== undefined && renderLargeCard(item[0])}
            </Grid>
            <Grid item md={6} xs={12}>
              {item[1] !== undefined && renderLargeCard(item[1])}
            </Grid>
            <Grid item md={4} xs={12}>
              {item[2] !== undefined && renderLargeCard(item[2])}
            </Grid>
            <Grid item md={4} xs={12}>
              {item[3] !== undefined && renderLargeCard(item[3])}
            </Grid>
            <Grid item md={4} xs={12} container alignContent='flex-start'>
              <Grid item md={12} xs={12}>
                {item[4] !== undefined && renderSmallCard(item[4])}
              </Grid>
              <Grid item md={12} xs={12}>
                {item[5] !== undefined && renderSmallCard(item[5])}
              </Grid>
              <Grid item md={12} xs={12}>
                {item[6] !== undefined && renderSmallCard(item[6])}
              </Grid>
              <Grid item md={12} xs={12}>
                {item[7] !== undefined && renderSmallCard(item[7])}
              </Grid>
            </Grid>
          </Fragment>
        ))}
      </Fragment>
    );
  };

  return (
    <Grid container spacing={2}>
      {renderNewList(newList, maxNewDisplay)}
    </Grid>
  );
}

NewLayout.propTypes = {
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
  maxNewDisplay: PropTypes.number,
};

NewLayout.defaultProps = {
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
  maxNewDisplay: 8,
};
