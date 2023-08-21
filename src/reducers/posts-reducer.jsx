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
    case "ADD_NEW_POST": return { ...state, allPosts: payload };
    default:
      return state;
  }
};
