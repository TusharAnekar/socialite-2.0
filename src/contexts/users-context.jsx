import { createContext, useContext, useEffect, useReducer } from "react";
import {
  addPostToBookmarksService,
  editUserDetailsService,
  followUserService,
  getAllUserBookmarkedPostsService,
  getAllUsersService,
  removePostFromBookmarksService,
  unfollowUserService,
} from "../services/users-services";
import { initialUsersState, usersReducer } from "../reducers/users-reducer";
import { AuthContext } from "./auth-context";

export const UsersContext = createContext();

export function UsersProvider({ children }) {
  const { token } = useContext(AuthContext);

  const [usersState, usersDisptach] = useReducer(
    usersReducer,
    initialUsersState
  );

  async function getAllUsers() {
    try {
      const response = await getAllUsersService();
      const {
        status,
        data: { users },
      } = response;

      if (status === 200) {
        usersDisptach({ type: "GET_ALL_USERS", payload: users });
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getAllUsers();

    async function getAllBookmarksOfUser() {
      try {
        const response = await getAllUserBookmarkedPostsService(token);
        const {
          status,
          data: { bookmarks },
        } = response;

        if (status === 200) {
          usersDisptach({ type: "SET_USER_BOOKMARKS", payload: bookmarks });
        }
      } catch (error) {
        console.error(error);
      }
    }

    token && getAllBookmarksOfUser();
  }, [token]);

  async function addToBookamarks(postId) {
    try {
      const response = await addPostToBookmarksService(postId, token);
      const {
        status,
        data: { bookmarks },
      } = response;

      if (status === 200) {
        usersDisptach({
          type: "ADD_POST_TO_USER_BOOKMARKS",
          payload: bookmarks,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function removeFromBookamarks(postId) {
    try {
      const response = await removePostFromBookmarksService(postId, token);
      const {
        status,
        data: { bookmarks },
      } = response;

      if (status === 200) {
        usersDisptach({
          type: "REMOVE_POST_FROM_USER_BOOKMARKS",
          payload: bookmarks,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  const getIsPostInBookmarks = (_id) =>
    usersState?.userBookmarks?.some((bookmarkPost) => bookmarkPost._id === _id);

  async function followUser(followUserId) {
    try {
      const response = await followUserService(followUserId, token);
      const {
        status,
        data: { user, followUser },
      } = response;

      if (status === 200) {
        usersDisptach({ type: "UPDATE_FOLLOWING_USER", payload: user });
        usersDisptach({ type: "UPDATE_FOLLOWERS_USER", payload: followUser });
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function unFollowUser(unfollowUserId) {
    try {
      const response = await unfollowUserService(unfollowUserId, token);
      const {
        status,
        data: { user, followUser },
      } = response;
      if (status === 200) {
        usersDisptach({ type: "UPDATE_FOLLOWING_USER", payload: user });
        usersDisptach({ type: "UPDATE_FOLLOWERS_USER", payload: followUser });
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function editUserDetails(userProfileDetails) {
    try {
      const response = await editUserDetailsService(userProfileDetails, token);

      const {
        status,
        data: { user },
      } = response;
      if (status === 201) {
        usersDisptach({ type: "SET_EDITED_USER", payload: user });
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <UsersContext.Provider
      value={{
        usersState,
        usersDisptach,
        addToBookamarks,
        getIsPostInBookmarks,
        removeFromBookamarks,
        followUser,
        unFollowUser,
        editUserDetails,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}
