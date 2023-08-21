import axios from "axios";

export const getAllPostsService = async () => await axios.get("/api/posts");

export const likePostOfUserService = async (postId, token) =>
  await axios.post(
    `/api/posts/like/${postId}`,
    {},
    {
      headers: { authorization: token },
    }
  );

export const dislikePostOfUserService = async (postId, token) =>
  await axios.post(
    `/api/posts/dislike/${postId}`,
    {},
    {
      headers: { authorization: token },
    }
  );

export const createPostService = async (postData, token) =>
  await axios.post(
    "/api/posts",
    {
      postData
    },
    {
      headers: { authorization: token },
    }
  );