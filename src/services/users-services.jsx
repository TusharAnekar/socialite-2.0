import axios from "axios";

export const getAllUsersService = async () => await axios.get("/api/users");

export const getAllUserBookmarkedPostsService = async (token) =>
  await axios.get("/api/users/bookmark", {
    headers: { authorization: token },
  });

export const addPostToBookmarksService = async (postId, token) =>
  await axios.post(
    `/api/users/bookmark/${postId}`,
    {},
    {
      headers: { authorization: token },
    }
  );

export const removePostFromBookmarksService = async (postId, token) =>
  await axios.post(
    `/api/users/remove-bookmark/${postId}`,
    {},
    {
      headers: { authorization: token },
    }
  );

export const followUserService = async (followUserId, token) => await axios.post(`/api/users/follow/${followUserId}`, {},
{
  headers: { authorization: token },
})