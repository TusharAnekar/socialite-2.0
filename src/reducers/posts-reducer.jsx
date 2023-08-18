export const initialPostsState = {
  allPosts: [],
  allLikedPosts: [],
};

export const postsReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_ALL_POSTS":
      return { ...state, allPosts: payload };
    default:
      return state;
  }
};
