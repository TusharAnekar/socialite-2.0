import { useContext, useState } from "react";
import { useParams } from "react-router-dom";

import "./postDetails.css";
import { PostsContext } from "../../contexts/posts-context";
import { PostCard } from "../../components/PostCard/PostCard";
import { CommentCard } from "../../components/CommentCard/CommentCard";
import { SuggestedUsers } from "../../components/SuggestedUsers/SuggestedUsers";
import { toast } from "react-toastify";

const PostDetails = () => {
  const { postId } = useParams();
  const [commentByUser, setCommentByUser] = useState("");

  const {
    postsState: { allPosts },
    addCommentOnPost,
  } = useContext(PostsContext);

  const post = allPosts?.find(({ _id }) => _id === postId);

  const handleTextarea = (e) => {
    setCommentByUser(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (commentByUser.trim().length) {
      addCommentOnPost(
        commentByUser.trim(),
        post?.comments?.length + 1,
        postId
      );
      setCommentByUser("");
      toast.success("Comment added successfully.");
    }
  };

  return (
    <div className="post-details-page">
      <div className="post-details-container">
        <PostCard post={post} />

        <div className="comments-container">
          <h3 className="comments-title">Comments</h3>
          <form onSubmit={handleSubmit} className="add-comment-form">
            <textarea
              name="comment"
              value={commentByUser}
              onChange={handleTextarea}
              placeholder="Something to say on post..."
              className="comment-textarea"
            ></textarea>
            <button type="submit" className="add-comment-button">
              Add Comment
            </button>
          </form>
          <ol reversed>
            {post?.comments?.map((postComment) => (
              <li key={postComment.id}>
                <CommentCard postComment={postComment} postId={postId} />
              </li>
            ))}
          </ol>
        </div>
      </div>
      <SuggestedUsers />
    </div>
  );
};

export { PostDetails };
