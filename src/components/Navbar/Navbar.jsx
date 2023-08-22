import "./navbar.css";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth-context";
import { PostsContext } from "../../contexts/posts-context";

export function Navbar() {
  const navigate = useNavigate();
  const {currentUser: {_id}} = useContext(AuthContext)

  const {postsState: {isShowPostModal}, postsDispatch} = useContext(PostsContext)

  return (
    <nav className="navbar-container">
      <div className="icon-container" onClick={() => navigate("/")}>
        <HomeIcon />
        <p className="icon-title">Home</p>
      </div>
      <div className="icon-container" onClick={() => navigate("/explore")}>
        <ExploreIcon onClick={() => navigate("/explore")} />
        <p className="icon-title">Explore</p>
      </div>
      <div className="icon-container add-icon" onClick={() => postsDispatch({type: "SET_IS_SHOW_POST_MODAL", payload: !isShowPostModal})}>
        <AddCircleIcon />
        <p className="icon-title">Post</p>
      </div>
      <div className="icon-container" onClick={() => navigate("/bookmark")}>
        <BookmarkIcon />
        <p className="icon-title">Bookmark</p>
      </div>
      <div className="icon-container" onClick={() => navigate(`/profile/${_id}`)}>
        <AccountCircleIcon />
        <p className="icon-title">Profile</p>
      </div>
    </nav>
  );
}
