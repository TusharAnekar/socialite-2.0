import { useContext, useState } from "react";
import "./home.css";
import { AuthContext } from "../../contexts/auth-context";
import { PostsContext } from "../../contexts/posts-context";
import { UsersContext } from "../../contexts/users-context";
import { PostCard } from "../../components/PostCard/PostCard";
import { SuggestedUsers } from "../../components/SuggestedUsers/SuggestedUsers";

export function Home() {
  const [newPost, setNewPost] = useState("");
  const { currentUser } = useContext(AuthContext);
  const {
    postsState: { allPosts, sortType },
    postsDispatch,
    createPost,
  } = useContext(PostsContext);
  const {
    usersState: { allUsers },
  } = useContext(UsersContext);

  const updatedCurrentUser = allUsers?.find(
    ({ _id }) => _id === currentUser?._id
  );

  const userFeedPosts = allPosts?.filter(
    (post) =>
      updatedCurrentUser?.following?.some(
        ({ username }) => username === post?.username
      ) || post?.username === updatedCurrentUser?.username
  );

  function handleFilterType(e) {
    postsDispatch({ type: "SET_SORT_TYPE", payload: e.target.value });
  }

  const filteredUserFeedPosts =
    sortType === "Latest"
      ? [...userFeedPosts]?.sort((a, b) =>
          b?.createdAt?.localeCompare(a?.createdAt, "en", {
            sensitivity: "base",
          })
        )
      : [...userFeedPosts]?.sort(
          (a, b) => b?.likes?.likeCount - a?.likes?.likeCount
        );

  function handleTextarea(e) {
    setNewPost(e.target.value);
  }

  function handlePost() {
    createPost(newPost);
    setNewPost("")
  }

  return (
    <div className="home-container">
      <div className="post-filter-container">
        <div className="post-container">
          <textarea
            rows="5"
            placeholder="Something on your mind..."
            className="post-textarea"
            value={newPost}
            onChange={handleTextarea}
          ></textarea>
          <button className="post-button" onClick={handlePost} disabled={!newPost.length}>
            Post
          </button>
        </div>
        <div className="filters-container">
          <button
            className={
              sortType === "Latest"
                ? "sort-button active-button"
                : "sort-button"
            }
            value={"Latest"}
            onClick={handleFilterType}
          >
            Latest
          </button>
          <button
            className={
              sortType === "Trending"
                ? "sort-button active-button"
                : "sort-button"
            }
            value={"Trending"}
            onClick={handleFilterType}
          >
            Trending
          </button>
        </div>
        <div>
          {filteredUserFeedPosts?.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </div>

      <SuggestedUsers />
    </div>
  );
}
