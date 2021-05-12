import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: 'white',
    width: '580px',
    borderRadius: '4px',
    overflow: 'hidden',
    marginTop: '20px',
  },
  mainComment: {
    padding: '20px',
    paddingBottom: '0',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  user: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },
  userAvatar: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
  },
  userInfor: {
    marginLeft: '10px',
  },
  userName: {
    fontSize: '16px',
    fontWeight: '500',
    color: theme.palette.textColor.main,
  },
  userActivity: {
    fontSize: '14px',
    fontWeight: '400',
    color: theme.palette.textColor.light,
  },
  ratePoint: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#7ed321',
    textAlign: 'center',
  },
  rateStar: {
    fontSize: '12px',
    color: theme.palette.primary.main,
  },
  content: {
    textAlign: 'justify',
    fontSize: '16px',
    fontWeight: '400',
    color: theme.palette.textColor.main,
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: '14px',
    paddingBottom: '14px',
    borderTop: `1px solid ${theme.palette.borderColor.light}`,
  },
  like: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  likeIcon: {
    fontSize: '20px',
    color: theme.palette.textColor.light,
  },
  likeNumber: {
    fontSize: '16px',
    fontWeight: '500',
    color: theme.palette.textColor.light,
    marginLeft: '8px',
  },
  comment: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    marginLeft: '40px',
  },
  commentIcon: {
    fontSize: '20px',
    color: theme.palette.textColor.light,
  },
  commentNumber: {
    fontSize: '16px',
    fontWeight: '500',
    color: theme.palette.textColor.light,
    marginLeft: '8px',
  },
  replyComment: {
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
  myCommentContainer: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: '4px',
    width: '580px',
    padding: '8px 20px',
    cursor: 'pointer',
  },
  myCommentUserAvatar: {
    width: '38px',
    height: '38px',
    borderRadius: '50%',
  },
  myCommentInfor: {
    flex: '1',
    fontSize: '16px',
    fontWeight: '500',
    color: theme.palette.textColor.light,
    marginLeft: '10px',
  },
  myCommentRateStar: {
    fontSize: '30px',
    color: theme.palette.primary.main,
  },
  horizontalSeparate: {
    borderBottom: `1px solid ${theme.palette.borderColor.light}`,
  },
}));

export default function CommentBlock() {
  return (
    <Fragment>
      <MyComment />
      <OldComment />
      <OldComment />
    </Fragment>
  );
}

function MyComment() {
  const classes = useStyles();

  return (
    <div className={classes.myCommentContainer}>
      <img
        src='/assets/img/user/default_avatar.png'
        alt='user_avatar'
        className={classes.myCommentUserAvatar}
      ></img>
      <p className={classes.myCommentInfor}>Bạn nghĩ gì về phim này?</p>
      <Rating
        name='simple-controlled'
        value={5}
        defaultValue={5}
        precision={0.5}
        disabled
        classes={{
          root: classes.myCommentRateStar,
        }}
      />
    </div>
  );
}

function OldComment() {
  const classes = useStyles();
  const [isShowReplyComment, setIsShowReplyComment] = React.useState(false);

  const toggleShowReplyComment = () => {
    setIsShowReplyComment(!isShowReplyComment);
  };

  const renderReplyComment = () => {
    let randomNumber = Math.floor(Math.random() * 5) + 1;
    let replyCommentList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    replyCommentList = replyCommentList.slice(0, randomNumber);

    return replyCommentList.map((item, index) => (
      <div className={classes.replyComment}>
        {/* Header */}
        <div className={classes.header}>
          <div className={classes.user}>
            <img
              src='/assets/img/user/default_avatar.png'
              alt='user_avatar'
              className={classes.replyUserAvatar}
            ></img>
            <div className={classes.userInfor}>
              <div className={classes.userName}>Nguyễn Hoàng Tuấn</div>
              <div className={classes.userActivity}>5 ngày trước</div>
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
            <ThumbUpAltOutlinedIcon className={classes.likeIcon} />
            <div className={classes.likeNumber}>12 Thích</div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className={classes.container}>
      {/* Main comment */}
      <div className={classes.mainComment}>
        {/* Header */}
        <div className={classes.header}>
          <div className={classes.user}>
            <img
              src='/assets/img/user/default_avatar.png'
              alt='user_avatar'
              className={classes.userAvatar}
            ></img>
            <div className={classes.userInfor}>
              <div className={classes.userName}>Nguyễn Hoàng Tuấn</div>
              <div className={classes.userActivity}>5 ngày trước</div>
            </div>
          </div>
          <div className={classes.rate}>
            <div className={classes.ratePoint}>9</div>
            <Rating
              name='half-rating-read'
              defaultValue={0}
              value={9 / 2}
              precision={0.5}
              readOnly
              classes={{
                root: classes.rateStar,
              }}
            />
          </div>
        </div>
        {/* Body */}
        <p className={classes.content}>
          Không hay bằng các phần trước. Ai thích xem hành động thì coi, vì phim
          chỉ chạy và chạy liên tục xong hết phim, không được logic lắm! Cảnh
          cảm động cũng làm không tới :(((
        </p>
        {/* Footer */}
        <div className={classes.footer}>
          <div className={classes.like}>
            <ThumbUpAltOutlinedIcon className={classes.likeIcon} />
            <div className={classes.likeNumber}>12 Thích</div>
          </div>
          <div className={classes.comment} onClick={toggleShowReplyComment}>
            <ChatBubbleOutlineIcon className={classes.commentIcon} />
            <div className={classes.commentNumber}>12 Bình luận</div>
          </div>
        </div>
      </div>
      {/* Horizontal Separate */}
      <div className={classes.horizontalSeparate}></div>
      {isShowReplyComment && renderReplyComment()}
    </div>
  );
}
