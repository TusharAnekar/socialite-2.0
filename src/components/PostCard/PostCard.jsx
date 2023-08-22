import { useContext, useState } from "react";
import "./postCard.css";
import { UsersContext } from "../../contexts/users-context";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import dayjs from "dayjs";
import { PostsContext } from "../../contexts/posts-context";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth-context";

export function PostCard({ post }) {
  const [showOptionsModal, setShowOptionsModal] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
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
    usersState: { allUsers }, unFollowUser, followUser
  } = useContext(UsersContext);
  const { likePostOfUser, dislikePostOfUser, getIsPostLiked, deletePost, postsDispatch } =
    useContext(PostsContext);
  const postUser = allUsers.find((user) => user.username === username);
  const { firstName, lastName, profileAvatar } = postUser;

  const isPostInBookmarks = getIsPostInBookmarks(_id);
  const isPostLiked = getIsPostLiked(_id);

  const isPostOfCurrentUser = username === currentUser?.username;

  const updatedCurrentUser = allUsers.find(
    (user) => user.username === currentUser?.username
  );

  const isUpdatedCurrentUserFollowingPostUser =
    updatedCurrentUser?.following?.some(
      (followingUser) => followingUser?.username === postUser?.username
    );

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

  function handleShowOptions() {
    setShowOptionsModal(!showOptionsModal);
  }

  function handleDelete() {
    deletePost(_id);
    setShowOptionsModal(false)
  }

  function handleUnfollow () {
    unFollowUser(postUser?._id)
    setShowOptionsModal(false)
  }

  function handleFollow () {
    followUser(postUser?._id)
    setShowOptionsModal(false)
  }

  function handleEdit () {
    postsDispatch({type: "SET_IS_SHOW_POST_MODAL", payload: true})
    postsDispatch({type: "POST_TO_BE_EDITED", payload: post})
    setShowOptionsModal(false)
  }

  return (
    <div className="post-card-container">
      <img
        src={profileAvatar}
        alt={firstName}
        className="profile-avatar"
        onClick={() => navigate(`/profile/${postUser._id}`)}
      />
      <div className="user-details-post-container">
        <div className="user-details-container">
          <p>
            <strong>
              {firstName} {lastName}
            </strong>{" "}
            @{username} {dayjs(createdAt).format("DD/MMM/YY")}
          </p>
          <MoreHorizIcon onClick={handleShowOptions} />
          {showOptionsModal && (
            <div className="options-buttons-container">
              {isPostOfCurrentUser ? (
                <div className="edit-delete-container">
                  <button onClick={handleDelete}>Delete</button>
                  <button onClick={handleEdit}>Edit</button>
                </div>
              ) : isUpdatedCurrentUserFollowingPostUser ? (
                <div>
                  <button onClick={handleUnfollow}>Unfollow</button>
                </div>
              ) : (
                <div>
                  <button onClick={handleFollow}>Follow</button>
                </div>
              )}
            </div>
          )}
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
