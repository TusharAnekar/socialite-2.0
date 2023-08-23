import { useContext } from "react";
import "./bookmarks.css";
import { UsersContext } from "../../contexts/users-context";
import { PostCard } from "../../components/PostCard/PostCard";
import { PostsContext } from "../../contexts/posts-context";
import { SuggestedUsers } from "../../components/SuggestedUsers/SuggestedUsers";

export function Bookmarks() {
  const {
    usersState: { userBookmarks },
  } = useContext(UsersContext);
  const {
    postsState: { allPosts },
  } = useContext(PostsContext);

  const updatedBookmarks = allPosts?.filter(
    (post) =>
      userBookmarks?.find(({ _id }) => _id === post?._id)?._id === post?._id
  );

  return (
    <div className="bookmarks-container">
      <div className="bookmarks-posts-container">
        {updatedBookmarks?.length ? updatedBookmarks?.map((bookmarkPost) => (
          <PostCard post={bookmarkPost} key={bookmarkPost?._id} />
        )) : <h2>No posts in bookmarks</h2>}
      </div>
      <SuggestedUsers />
    </div>
  );
}
