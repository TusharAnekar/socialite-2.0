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

  return (
    <div className="bookmarks-container">
      <div className="bookmarks-posts-container">
        {userBookmarks?.map((bookmarkPost) => {
          const post = allPosts?.find(({ _id }) => _id === bookmarkPost?._id);
          return <PostCard post={post} key={post?._id} />;
        })}
      </div>
      <SuggestedUsers />
    </div>
  );
}
