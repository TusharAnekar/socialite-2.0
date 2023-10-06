import { useContext, useState } from "react";

import "./commentCard.css";
import { UsersContext } from "../../contexts/users-context";
import { useNavigate } from "react-router-dom";

import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { PostsContext } from "../../contexts/posts-context";
import { AuthContext } from "../../contexts/auth-context";
import { toast } from "react-toastify";

const CommentCard = ({ postComment, postId }) => {
  const { id, comment, commentLikeCount, username } = postComment;

  const navigate = useNavigate();
  const [editCommentDetails, setEditCommentDetails] = useState({
    isEditComment: false,
    updatedComment: "",
  });

  const {
    usersState: { allUsers },
  } = useContext(UsersContext);

  const { likeACommentOnPost, deleteACommentOnPost, updateACommentOnPost } =
    useContext(PostsContext);

  const { currentUser } = useContext(AuthContext);

  const { _id, firstName, lastName, profileAvatar } = allUsers?.find(
    (user) => username === user.username
  );

  const handleLike = () => {
    likeACommentOnPost(id, postId);
  };

  const handleEdit = () => {
    setEditCommentDetails({ ...editCommentDetails, isEditComment: true });
  };

  const handleCancel = () => {
    setEditCommentDetails({ ...editCommentDetails, isEditComment: false });
  };

  const handleDelete = () => {
    deleteACommentOnPost(id, postId);
    toast.error("Comment deleted successfully.");
  };

  const handleTextarea = (e) => {
    if (e.target.value.trim().length) {
      setEditCommentDetails({
        ...editCommentDetails,
        updatedComment: e.target.value,
      });
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (editCommentDetails.updatedComment.trim().length) {
      updateACommentOnPost(id, postId, editCommentDetails.updatedComment);
      setEditCommentDetails({ ...editCommentDetails, isEditComment: false });
      toast.success("Comment edited successfully.");
    }
  };

  return (
    <div className="comment-card-container">
      <div className="img-user-details-container">
        <img
          src={profileAvatar}
          alt={firstName}
          className="profile-avatar icon"
          onClick={() => navigate(`/profile/${_id}`)}
        />
        <div className="user-details-container">
          <p
            className="name-date-container"
            onClick={() => navigate(`/profile/${_id}`)}
          >
            <strong>
              {firstName} {lastName}
            </strong>{" "}
            @{username}
          </p>
        </div>
      </div>
      <div>
        {editCommentDetails.isEditComment ? (
          <form onSubmit={handleUpdate} className="edit-comment-container">
            <textarea
              name="comment"
              defaultValue={comment}
              className="comment-textarea"
              onChange={handleTextarea}
              required
            ></textarea>
            <div className="cancel-update">
              <button className="cancel-button" onClick={handleCancel}>
                Cancel
              </button>
              <button className="update-button" type="submit">
                Update
              </button>
            </div>
          </form>
        ) : (
          <p>{comment}</p>
        )}

        <div className="icons-container">
          <div>
            <FavoriteTwoToneIcon onClick={handleLike} className="icon" />
            {!!commentLikeCount && <span>{commentLikeCount}</span>}
          </div>
          {currentUser.username === username && (
            <div className="edit-delete-container">
              <EditIcon className="icon" onClick={handleEdit} />
              <DeleteIcon className="icon" onClick={handleDelete} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { CommentCard };
