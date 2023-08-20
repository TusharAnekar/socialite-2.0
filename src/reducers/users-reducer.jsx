export const initialUsersState = {
  allUsers: [],
  inputSearch: "",
  userBookmarks: [],
};

export const usersReducer = (state, { type, payload }) => {
  switch (type) {
    case "GET_ALL_USERS":
      return { ...state, allUsers: payload };
    case "INPUT_SEARCH":
      return { ...state, inputSearch: payload };
    case "SET_USER_BOOKMARKS":
      return { ...state, userBookmarks: payload };
    case "ADD_POST_TO_USER_BOOKMARKS":
      return { ...state, userBookmarks: payload };
    case "REMOVE_POST_FROM_USER_BOOKMARKS":
      return { ...state, userBookmarks: payload };
    case "ADD_FOLLOWING_USER":
      return {
        ...state,
        allUsers: state.allUsers?.map((user) =>
          user?._id === payload?._id
            ? Object.assign(user, { following: payload?.following })
            : user
        ),
      };
    default:
      return state;
  }
};
