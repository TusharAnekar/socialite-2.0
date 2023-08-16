import { useContext } from "react";
import "./postCard.css";
import { UsersContext } from "../../contexts/users-context";
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export function PostCard({ post }) {
  const {addToBookamarks, getIsPostInBookmarks} = useContext(UsersContext)
  const {_id, content, mediaURL, likes: {likeCount}, username } = post;
  const {
    usersState: { allUsers },
  } = useContext(UsersContext);
  const postUser = allUsers.find((user) => user.username === username);
  const { firstName, lastName, profileAvatar } = postUser;

  const isPostInBookmarks = getIsPostInBookmarks(_id)

  function handleAddToBookmark () {
    addToBookamarks(_id)
  }

  return (
    <div className="post-card-container">
      <img src={profileAvatar} alt={firstName} className="profile-avatar" />
      <div>
        <div className="user-details-container">
        <p>
          <strong>
            {firstName} {lastName}
          </strong>{" "}
          @{username}
        </p>
        <MoreHorizIcon/>
        </div>
        <p className="content">{content}</p>
        <div className="media-container">
          {mediaURL &&
            (mediaURL.split("/")[4] === "image" ? (
              <img src={mediaURL} alt={username} />
            ) : (
              <video controls autoPlay loop muted>
                <source src={mediaURL} type="video/mp4" />
              </video>
            ))}
        </div>
        <div className="icons-container">
                <ModeCommentOutlinedIcon />
                <div><FavoriteBorderIcon/> {likeCount}</div>
                <BookmarkBorderIcon className={isPostInBookmarks && "bookmark-icon"} onClick={handleAddToBookmark}/>
        </div>
      </div>
    </div>
  );
}
