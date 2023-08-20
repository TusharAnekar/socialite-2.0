import { useContext } from "react";
import "./suggestedUserCard.css";
import { UsersContext } from "../../contexts/users-context";
export function SuggestedUserCard({ suggestedUser }) {
  const {_id, firstName, lastName, username, profileAvatar } = suggestedUser;

  const {followUser} = useContext(UsersContext)

  function handleFollow () {
    followUser(_id)
  }
  return (
    <div className="suggested-user-card-container">
      <div className="img-user-details-container">
        <img src={profileAvatar} alt={firstName} />
        <div>
          <p>
            {firstName} {lastName}
          </p>
          <p>@{username}</p>
        </div>
      </div>
      <button className="follow-button" onClick={handleFollow}>Follow</button>
    </div>
  );
}
