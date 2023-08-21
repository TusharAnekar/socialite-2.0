import { useContext } from "react";
import "./explore.css";
import { PostsContext } from "../../contexts/posts-context";
import { PostCard } from "../../components/PostCard/PostCard";
import { SuggestedUsers } from "../../components/SuggestedUsers/SuggestedUsers";

export function Explore() {
  const {
    postsState: { allPosts },
  } = useContext(PostsContext);

  const latestFilteredPosts = [...allPosts]?.sort((a,b) => b?.createdAt?.localeCompare(a?.createdAt, 'en', { sensitivity: 'base' }))

  return (
    <div className="explore-container">
      <div className="explore-suggested-users-container">
        <div className="posts-container">
          {latestFilteredPosts?.map((post) => (
            <PostCard post={post} key={post._id}/>
          ))}
        </div>
        <SuggestedUsers/>
      </div>
    </div>
  );
}
