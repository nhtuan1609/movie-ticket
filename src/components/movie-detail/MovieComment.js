import React, { Fragment } from 'react';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  oldReviewContainer: {
    backgroundColor: 'white',
    width: '580px',
    borderRadius: '4px',
    overflow: 'hidden',
    marginTop: '20px',
  },
  oldReview: {
    padding: '20px',
    paddingBottom: '0',
  },
  oldReviewHeader: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  oldReviewUser: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },
  OldReviewUserAvatar: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
  },
  oldReviewUserInfor: {
    marginLeft: '10px',
  },
  oldReviewUserName: {
    fontSize: '16px',
    fontWeight: '500',
    color: theme.palette.textColor.main,
  },
  oldReviewUserActivity: {
    fontSize: '14px',
    fontWeight: '400',
    color: theme.palette.textColor.light,
  },
  oldReviewRatePoint: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#7ed321',
    textAlign: 'center',
  },
  oldReviewRateStar: {
    fontSize: '12px',
    color: theme.palette.primary.main,
  },
  oldReviewContent: {
    textAlign: 'justify',
    fontSize: '16px',
    fontWeight: '400',
    color: theme.palette.textColor.main,
  },
  oldReviewFooter: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: '14px',
    paddingBottom: '14px',
    borderTop: `1px solid ${theme.palette.borderColor.light}`,
  },
  oldReviewLike: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  oldReviewLikeIcon: {
    fontSize: '20px',
    color: theme.palette.textColor.light,
  },
  oldReviewLikeNumber: {
    fontSize: '16px',
    fontWeight: '500',
    color: theme.palette.textColor.light,
    marginLeft: '8px',
  },
  oldReviewcomment: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    marginLeft: '40px',
  },
  oldReviewCommentIcon: {
    fontSize: '20px',
    color: theme.palette.textColor.light,
  },
  oldReviewCommentNumber: {
    fontSize: '16px',
    fontWeight: '500',
    color: theme.palette.textColor.light,
    marginLeft: '8px',
  },
  replyReview: {
    padding: '20px',
    backgroundColor: '#f7fcff',
    paddingTop: '16px',
    paddingBottom: '0',
  },
  replyUserAvatar: {
    width: '28px',
    height: '28px',
    borderRadius: '50%',
  },
  replyContent: {
    textAlign: 'justify',
    fontSize: '16px',
    fontWeight: '400',
    color: theme.palette.textColor.main,
    marginLeft: '38px',
  },
  replyFooter: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: '16px',
    borderBottom: `1px solid ${theme.palette.borderColor.light}`,
  },
  replyLike: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    marginLeft: '38px',
  },
  myReviewContainer: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: '4px',
    width: '580px',
    padding: '8px 20px',
    cursor: 'pointer',
  },
  myReviewUserAvatar: {
    width: '38px',
    height: '38px',
    borderRadius: '50%',
  },
  myReviewInfor: {
    flex: '1',
    fontSize: '16px',
    fontWeight: '500',
    color: theme.palette.textColor.light,
    marginLeft: '10px',
  },
  myReviewRateStar: {
    fontSize: '30px',
    color: theme.palette.primary.main,
  },
  reviewBox: {
    position: 'relative',
    width: '782px',
    padding: '20px',
  },
  reviewBoxCloseIcon: {
    position: 'absolute',
    top: '4px',
    right: '4px',
    cursor: 'pointer',
  },
  reviewBoxRate: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  reviewBoxRatePoint: {
    fontSize: '40px',
    fontWeight: '500',
    color: '#7ed321',
  },
  reviewBoxRateStart: {
    fontSize: '40px',
    color: theme.palette.primary.main,
  },
  reviewBoxInput: {
    display: 'block',
    width: '100% !important',
    height: '86px !important',
    margin: '20px 0',
    resize: 'none',
    padding: '20px',
    borderRadius: '4px',
    fontSize: '16px',
    color: theme.palette.textColor.main,
    fontFamily: theme.font.primary,
    outline: 'none',
    border: `1px solid ${theme.palette.borderColor.light}`,
    '&:focus': {
      border: `1px solid ${theme.palette.primary.main}`,
    },
  },
  reviewBoxMessage: {
    fontSize: '16px',
    fontWeight: '500',
    color: theme.palette.primary.main,
    textAlign: 'center',
  },
  reviewBoxButton: {
    width: '120px',
    marginRight: '0',
    marginLeft: 'auto',
  },
  horizontalSeparate: {
    borderBottom: `1px solid ${theme.palette.borderColor.light}`,
  },
}));

const PostButton = withStyles({
  root: {
    backgroundColor: '#f43f24',
    borderRadius: '4px',
    border: 0,
    color: 'white',
    width: '100%',
    maxWidth: '140px',
    height: '38px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#b42a14',
    },
  },
  label: {
    textTransform: 'upcase',
    fontSize: '16px',
    fontWeight: '500',
  },
})(Button);

function MyComment() {
  const classes = useStyles();
  const [isShowReviewBox, setIsShowReviewBox] = React.useState(false);
  const [isShowMessage, setIsShowMessage] = React.useState(false);
  const [rateStarValue, setRateStarValue] = React.useState(3);
  const [reviewContent, setReviewContent] = React.useState('');

  const openIsShowReviewBox = () => {
    setRateStarValue(3);
    setReviewContent('');
    setIsShowMessage(false);
    setIsShowReviewBox(true);
  };

  const closeIsShowReviewBox = () => {
    setIsShowReviewBox(false);
  };

  const handleReviewContent = (event) => {
    let newReviewContent = event.target.value;
    if (newReviewContent !== '') {
      setIsShowMessage(false);
    }
    setReviewContent(newReviewContent);
  };

  const handlePostButton = () => {
    if (reviewContent === '') {
      setIsShowMessage(true);
    } else {
      console.log(`Rate Point: ${rateStarValue * 2}`);
      console.log(`Review Content: ${reviewContent}`);
      setIsShowReviewBox(false);
    }
  };

  return (
    <Fragment>
      <div className={classes.myReviewContainer} onClick={openIsShowReviewBox}>
        <img
          src='/assets/img/user/default_avatar.png'
          alt='user_avatar'
          className={classes.myReviewUserAvatar}
        ></img>
        <p className={classes.myReviewInfor}>Bạn nghĩ gì về phim này?</p>
        <Rating
          value={5}
          defaultValue={5}
          precision={0.5}
          disabled
          classes={{
            root: classes.myReviewRateStar,
          }}
        />
      </div>
      <Dialog open={isShowReviewBox} maxWidth='false'>
        <div className={classes.reviewBox}>
          <CloseIcon
            className={classes.reviewBoxCloseIcon}
            onClick={closeIsShowReviewBox}
          />
          <div className={classes.reviewBoxRate}>
            <div className={classes.reviewBoxRatePoint}>
              {rateStarValue * 2}.0
            </div>
            <Rating
              value={rateStarValue}
              defaultValue={rateStarValue}
              precision={0.5}
              onChange={(event, newValue) => {
                console.log(event);
                setRateStarValue(newValue);
              }}
              classes={{
                root: classes.reviewBoxRateStart,
              }}
            />
          </div>
          <textarea
            onChange={handleReviewContent}
            className={classes.reviewBoxInput}
            autoFocus
            rows='2'
            spellcheck='false'
            placeholder='Nói cho mọi người biết bạn nghĩ gì về phim này...'
            value={reviewContent}
          ></textarea>
          {isShowMessage && (
            <p className={classes.reviewBoxMessage}>
              Hãy cho TIX biết suy nghĩ của bạn
            </p>
          )}

          <div className={classes.reviewBoxButton} onClick={handlePostButton}>
            <PostButton>Đăng</PostButton>
          </div>
        </div>
      </Dialog>
    </Fragment>
  );
}

function OldReview() {
  const classes = useStyles();
  const [isShowReplyReview, setIsShowReplyReview] = React.useState(false);

  const toggleShowReplyReview = () => {
    setIsShowReplyReview(!isShowReplyReview);
  };

  const renderReplyReview = () => {
    let randomNumber = Math.floor(Math.random() * 5) + 1;
    let replyReviewList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    replyReviewList = replyReviewList.slice(0, randomNumber);

    return replyReviewList.map((item, index) => (
      <div className={classes.replyReview}>
        {/* Header */}
        <div className={classes.oldReviewHeader}>
          <div className={classes.oldReviewUser}>
            <img
              src='/assets/img/user/default_avatar.png'
              alt='user_avatar'
              className={classes.replyUserAvatar}
            ></img>
            <div className={classes.oldReviewUserInfor}>
              <div className={classes.oldReviewUserName}>Nguyễn Hoàng Tuấn</div>
              <div className={classes.oldReviewUserActivity}>5 ngày trước</div>
            </div>
          </div>
        </div>
        {/* Body */}
        <p className={classes.replyContent}>
          Không hay bằng các phần trước. Ai thích xem hành động thì coi, vì phim
          chỉ chạy và chạy liên tục xong hết phim, không được logic lắm! Cảnh
          cảm động cũng làm không tới :(((
        </p>
        {/* Footer */}
        <div className={classes.replyFooter}>
          <div className={classes.replyLike}>
            <ThumbUpAltOutlinedIcon className={classes.oldReviewLikeIcon} />
            <div className={classes.oldReviewLikeNumber}>12 Thích</div>
          </div>
        </div>
      </div>
    ));
  };

  const rateStarValue = Math.floor(Math.random() * 10) + 1;

  return (
    <div className={classes.oldReviewContainer}>
      <div className={classes.oldReview}>
        {/* Header */}
        <div className={classes.oldReviewHeader}>
          <div className={classes.oldReviewUser}>
            <img
              src='/assets/img/user/default_avatar.png'
              alt='user_avatar'
              className={classes.OldReviewUserAvatar}
            ></img>
            <div className={classes.oldReviewUserInfor}>
              <div className={classes.oldReviewUserName}>Nguyễn Hoàng Tuấn</div>
              <div className={classes.oldReviewUserActivity}>5 ngày trước</div>
            </div>
          </div>
          <div className={classes.rate}>
            <div className={classes.oldReviewRatePoint}>{rateStarValue}.0</div>
            <Rating
              defaultValue={0}
              value={rateStarValue / 2}
              precision={0.5}
              readOnly
              classes={{
                root: classes.oldReviewRateStar,
              }}
            />
          </div>
        </div>
        {/* Body */}
        <p className={classes.oldReviewContent}>
          Không hay bằng các phần trước. Ai thích xem hành động thì coi, vì phim
          chỉ chạy và chạy liên tục xong hết phim, không được logic lắm! Cảnh
          cảm động cũng làm không tới :(((
        </p>
        {/* Footer */}
        <div className={classes.oldReviewFooter}>
          <div className={classes.oldReviewLike}>
            <ThumbUpAltOutlinedIcon className={classes.oldReviewLikeIcon} />
            <div className={classes.oldReviewLikeNumber}>12 Thích</div>
          </div>
          <div
            className={classes.oldReviewcomment}
            onClick={toggleShowReplyReview}
          >
            <ChatBubbleOutlineIcon className={classes.oldReviewCommentIcon} />
            <div className={classes.oldReviewCommentNumber}>12 Bình luận</div>
          </div>
        </div>
      </div>
      {/* Horizontal Separate */}
      <div className={classes.horizontalSeparate}></div>
      {isShowReplyReview && renderReplyReview()}
    </div>
  );
}

export default function CommentBlock() {
  return (
    <Fragment>
      <MyComment />
      <OldReview />
      <OldReview />
    </Fragment>
  );
}
