import { useContext } from "react";
import "./explore.css";
import { PostsContext } from "../../contexts/posts-context";
import { PostCard } from "../../components/PostCard/PostCard";
import { SuggestedUsers } from "../../components/SuggestedUsers/SuggestedUsers";

export function Explore() {
  const {
    postsState: { allPosts },
  } = useContext(PostsContext);
  return (
    <div className="explore-container">
      <h2>Explore</h2>
      <div className="explore-suggested-users-container">
        <div className="posts-container">
          {allPosts.map((post) => (
            <PostCard post={post} />
          ))}
        </div>
        <SuggestedUsers/>
      </div>
    </div>
  );
}
