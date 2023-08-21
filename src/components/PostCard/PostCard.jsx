import { useContext } from "react";
import "./postCard.css";
import { UsersContext } from "../../contexts/users-context";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import dayjs from "dayjs";
import { PostsContext } from "../../contexts/posts-context";

export function PostCard({ post }) {
  const { addToBookamarks, removeFromBookamarks, getIsPostInBookmarks } =
    useContext(UsersContext);
  const {
    _id,
    content,
    mediaURL,
    likes: { likeCount },
    username,
    createdAt,
  } = post;
  const {
    usersState: { allUsers },
  } = useContext(UsersContext);
  const { likePostOfUser, dislikePostOfUser, getIsPostLiked } =
    useContext(PostsContext);
  const postUser = allUsers.find((user) => user.username === username);
  const { firstName, lastName, profileAvatar } = postUser;

  const isPostInBookmarks = getIsPostInBookmarks(_id);
  const isPostLiked = getIsPostLiked(_id);

  function handleAddToBookmark() {
    if (isPostInBookmarks) {
      removeFromBookamarks(_id);
    } else {
      addToBookamarks(_id);
    }
  }

  function handleLike() {
    if (isPostLiked) {
      dislikePostOfUser(_id);
    } else {
      likePostOfUser(_id);
    }
  }

  return (
    <div className="post-card-container">
      <img src={profileAvatar} alt={firstName} className="profile-avatar" />
      <div className="user-details-post-container">
        <div className="user-details-container">
          <p>
            <strong>
              {firstName} {lastName}
            </strong>{" "}
            @{username} {dayjs(createdAt).format("DD/MMM/YY")}
          </p>
          <MoreHorizIcon />
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
          <div>
            <FavoriteTwoToneIcon
              className={isPostLiked ? "favorite-fill-icon" : ""}
              onClick={handleLike}
            />{" "}
            {likeCount}
          </div>
          <BookmarkIcon
            className={
              isPostInBookmarks ? "bookmark-fill-icon" : "bookmark-unFill-icon"
            }
            onClick={handleAddToBookmark}
          />
        </div>
      </div>
    </div>
  );
}
