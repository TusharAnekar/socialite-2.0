export const initialPostsState = {
  allPosts: [],
  allLikedPosts: [],
  sortType: "Latest",
  isShowPostModal: false,
  postToBeEdited: {}
};

export const postsReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_ALL_POSTS":
      return { ...state, allPosts: payload };
    case "SET_SORT_TYPE": return { ...state, sortType: payload };
    case "ADD_NEW_POST": return { ...state, allPosts: payload };
    case "SET_IS_SHOW_POST_MODAL": return {...state, isShowPostModal: payload}
    case "POST_TO_BE_EDITED" : return {...state, postToBeEdited: payload}
    default:
      return state;
  }
};
