export const initialPostsState = {
  allPosts: [],
  allLikedPosts: [],
  sortType: "Latest",
  isShowPostModal: false,
  postToBeEdited: {},
};

export const postsReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_ALL_POSTS":
      return {
        ...state,
        allPosts: payload.map((post) =>
          post.comments ?? false ? post : { ...post, comments: [] }
        ),
      };
    case "SET_SORT_TYPE":
      return { ...state, sortType: payload };
    case "ADD_NEW_POST":
      return {
        ...state,
        allPosts: payload.map((post) =>
          post.comments ?? false ? post : { ...post, comments: [] }
        ),
      };
    case "SET_IS_SHOW_POST_MODAL":
      return { ...state, isShowPostModal: payload };
    case "POST_TO_BE_EDITED":
      return { ...state, postToBeEdited: payload };
    case "ADD_COMMENT":
      return {
        ...state,
        allPosts: state.allPosts?.map((post) =>
          post._id === payload.postId
            ? { ...post, comments: [...post.comments, payload.newComment] }
            : post
        ),
      };
    case "LIKE_COMMENT":
      return {
        ...state,
        allPosts: state.allPosts?.map((post) =>
          post._id === payload.postId
            ? {
                ...post,
                comments: post.comments?.map((userComment) =>
                  userComment.id === payload.commentId
                    ? {
                        ...userComment,
                        commentLikeCount: userComment.commentLikeCount + 1,
                      }
                    : userComment
                ),
              }
            : post
        ),
      };

    case "DELETE_COMMENT":
      return {
        ...state,
        allPosts: state.allPosts?.map((post) =>
          post._id === payload.postId
            ? {
                ...post,
                comments: post.comments?.filter(
                  (userComment) => userComment.id !== payload.commentId
                ),
              }
            : post
        ),
      };

    case "UPDATE_COMMENT":
      return {
        ...state,
        allPosts: state.allPosts?.map((post) =>
          post._id === payload.postId
            ? {
                ...post,
                comments: post.comments?.map((userComment) =>
                  userComment.id === payload.commentId
                    ? {
                        ...userComment,
                        comment: payload.updatedComment,
                      }
                    : userComment
                ),
              }
            : post
        ),
      };
    default:
      return state;
  }
};
