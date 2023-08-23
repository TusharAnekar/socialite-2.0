import { useContext } from "react";
import "./suggestedUserCard.css";
import { UsersContext } from "../../contexts/users-context";
import { useNavigate } from "react-router-dom";
export function SuggestedUserCard({ suggestedUser, isSearchedUser }) {
  const { _id, firstName, lastName, username, profileAvatar } = suggestedUser;

  const { followUser, usersDisptach } = useContext(UsersContext);

  const navigate = useNavigate()

  function handleFollow() {
    followUser(_id);
  }

  function handleProfileView () {
    usersDisptach({ type: "INPUT_SEARCH", payload: "" });
    navigate(`/profile/${_id}`)
  } 

  return (
    <div className="suggested-user-card-container">
      <div className="img-user-details-container" onClick={handleProfileView}>
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
