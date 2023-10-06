import { createContext, useContext, useEffect, useReducer } from "react";
import {
  createPostService,
  deletePostService,
  dislikePostOfUserService,
  editPostService,
  getAllPostsService,
  likePostOfUserService,
} from "../services/posts-services";
import { initialPostsState, postsReducer } from "../reducers/posts-reducer";
import { AuthContext } from "./auth-context";
import { toast } from "react-toastify";

export const PostsContext = createContext();

export function PostsProvider({ children }) {
  const { token, currentUser } = useContext(AuthContext);

  const [postsState, postsDispatch] = useReducer(
    postsReducer,
    initialPostsState
  );

  async function getAllUsers() {
    try {
      const response = await getAllPostsService();
      const {
        status,
        data: { posts },
      } = response;

      if (status === 200) {
        postsDispatch({ type: "SET_ALL_POSTS", payload: posts });
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getAllUsers();
  }, []);

  async function likePostOfUser(postId) {
    try {
      const response = await likePostOfUserService(postId, token);
      const {
        status,
        data: { posts },
      } = response;

      if (status === 201) {
        postsDispatch({ type: "SET_ALL_POSTS", payload: posts });
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function dislikePostOfUser(postId) {
    try {
      const response = await dislikePostOfUserService(postId, token);
      const {
        status,
        data: { posts },
      } = response;

      if (status === 201) {
        postsDispatch({ type: "SET_ALL_POSTS", payload: posts });
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function createPost(post) {
    try {
      const response = await createPostService(post, token);
      const {
        status,
        data: { posts },
      } = response;

      if (status === 201) {
        postsDispatch({ type: "ADD_NEW_POST", payload: posts });
        toast.success("Post created successfully.");
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function deletePost(postId) {
    try {
      const response = await deletePostService(postId, token);
      const {
        status,
        data: { posts },
      } = response;
      if (status === 201) {
        postsDispatch({ type: "SET_ALL_POSTS", payload: posts });
        toast.error("Deleted post successfully.");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function editPost(postId, post) {
    try {
      const response = await editPostService(postId, post, token);
      const {
        status,
        data: { posts },
      } = response;
      if (status === 201) {
        postsDispatch({ type: "SET_ALL_POSTS", payload: posts });
        toast.success("Edited post successfully.");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const getIsPostLiked = (_id) =>
    postsState?.allPosts
      ?.filter((post) => post?._id === _id)
      .some(({ likes: { likedBy } }) =>
        likedBy?.some(({ _id }) => _id === currentUser?._id)
      );

  const addCommentOnPost = (commentOnPost, commentId, postId) => {
    const newComment = {
      id: commentId,
      comment: commentOnPost,
      commentLikeCount: 0,
      username: currentUser.username,
    };

    postsDispatch({ type: "ADD_COMMENT", payload: { newComment, postId } });
  };

  const likeACommentOnPost = (commentId, postId) => {
    postsDispatch({ type: "LIKE_COMMENT", payload: { commentId, postId } });
  };

  const deleteACommentOnPost = (commentId, postId) => {
    postsDispatch({ type: "DELETE_COMMENT", payload: { commentId, postId } });
  };

  const updateACommentOnPost = (commentId, postId, updatedComment) => {
    postsDispatch({
      type: "UPDATE_COMMENT",
      payload: { commentId, postId, updatedComment },
    });
  };

  return (
    <PostsContext.Provider
      value={{
        postsState,
        postsDispatch,
        likePostOfUser,
        dislikePostOfUser,
        getIsPostLiked,
        createPost,
        deletePost,
        editPost,
        addCommentOnPost,
        likeACommentOnPost,
        deleteACommentOnPost,
        updateACommentOnPost,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
}
