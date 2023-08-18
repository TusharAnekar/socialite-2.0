import { createContext, useContext, useEffect, useReducer } from "react";
import {
  dislikePostOfUserService,
  getAllPostsService,
  likePostOfUserService,
} from "../services/posts-services";
import { initialPostsState, postsReducer } from "../reducers/posts-reducer";
import { AuthContext } from "./auth-context";

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

  const getIsPostLiked = (_id) =>
    postsState?.allPosts?.filter((post) => post?._id === _id).some(({ likes: { likedBy } }) =>
    likedBy?.some(({ _id }) => _id === currentUser?._id)
  );

  return (
    <PostsContext.Provider
      value={{
        postsState,
        postsDispatch,
        likePostOfUser,
        dislikePostOfUser,
        getIsPostLiked,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
}
