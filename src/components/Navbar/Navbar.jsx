import "./navbar.css";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

export function Navbar() {
  const navigate = useNavigate();
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
      <div className="icon-container add-icon">
        <AddCircleIcon />
        <p className="icon-title">Tweet</p>
      </div>
      <div className="icon-container" onClick={() => navigate("/bookmark")}>
        <BookmarkIcon />
        <p className="icon-title">Bookmark</p>
      </div>
      <div className="icon-container" onClick={() => navigate("/profile")}>
        <AccountCircleIcon />
        <p className="icon-title">Profile</p>
      </div>
    </nav>
  );
}
