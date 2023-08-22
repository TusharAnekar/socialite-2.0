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

export const createPostService = async (post, token) =>
  await axios.post(
    "/api/posts",
    {
      postData: { content: post },
    },
    {
      headers: { authorization: token },
    }
  );

export const deletePostService = async (postId, token) =>
  await axios.delete(`/api/posts/${postId}`, {
    headers: { authorization: token },
  });

export const editPostService = async (postId, post, token) =>
  await axios.post(
    `/api/posts/edit/${postId}`,
    {
      postData: { content: post },
    },
    {
      headers: { authorization: token },
    }
  );
