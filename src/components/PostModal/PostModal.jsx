import { useContext, useState } from "react";
import "./postModal.css";
import { PostsContext } from "../../contexts/posts-context";

export function PostModal() {
  const [post, setPost] = useState("");

  const {
    postsState: { postToBeEdited },
    postsDispatch,
    createPost,
    editPost,
  } = useContext(PostsContext);

  function handleInput(e) {
    setPost(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (postToBeEdited?._id) {
      editPost(postToBeEdited?._id, post);
      postsDispatch({ type: "POST_TO_BE_EDITED", payload: {} });
    } else {
      createPost(post);
      setPost("");
    }
    postsDispatch({ type: "SET_IS_SHOW_POST_MODAL", payload: false });
  }

  function handleCancel(e) {
    e.preventDefault();
    setPost("");
    postsDispatch({ type: "POST_TO_BE_EDITED", payload: {} });
    postsDispatch({ type: "SET_IS_SHOW_POST_MODAL", payload: false });
  }

  return (
    <div className="post-modal-container">
      <form onSubmit={handleSubmit} className="form-container">
        <textarea
          name="post"
          defaultValue={postToBeEdited?.content}
          cols="30"
          rows="5"
          placeholder="Something on your mind..."
          required
          className="textarea"
          onChange={handleInput}
        ></textarea>
        <div className="submit-button-container">
          <button className="cancel-button" onClick={handleCancel}>
            Cancel
          </button>
          <button type="submit" className="submit-button">
            {postToBeEdited?._id ? "Update" : "Post"}
          </button>
        </div>
      </form>
    </div>
  );
}
