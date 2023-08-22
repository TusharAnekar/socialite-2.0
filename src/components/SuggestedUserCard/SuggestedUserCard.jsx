import { useContext } from "react";
import "./suggestedUserCard.css";
import { UsersContext } from "../../contexts/users-context";
import { useNavigate } from "react-router-dom";
export function SuggestedUserCard({ suggestedUser, isSearchedUser }) {
  const { _id, firstName, lastName, username, profileAvatar } = suggestedUser;

  const { followUser } = useContext(UsersContext);

  const navigate = useNavigate()

  function handleFollow() {
    followUser(_id);
  }
  
  return (
    <div className="suggested-user-card-container">
      <div className="img-user-details-container" onClick={() => navigate(`/profile/${_id}`)}>
        <img src={profileAvatar} alt={firstName} />
        <div>
          <p>
            {firstName} {lastName}
          </p>
          <p>@{username}</p>
        </div>
      </div>
      {!isSearchedUser && (
        <button className="follow-button" onClick={handleFollow}>
          Follow
        </button>
      )}
    </div>
  );
}
