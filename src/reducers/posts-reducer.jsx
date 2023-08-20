export const initialPostsState = {
  allPosts: [],
  allLikedPosts: [],
  sortType: "Latest"
};

export const postsReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_ALL_POSTS":
      return { ...state, allPosts: payload };
    case "SET_SORT_TYPE": return { ...state, sortType: payload };
    default:
      return state;
  }
};
