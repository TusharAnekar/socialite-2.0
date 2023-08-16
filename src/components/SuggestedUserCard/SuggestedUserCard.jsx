import "./suggestedUserCard.css";
export function SuggestedUserCard({ suggestedUser }) {
  const { firstName, lastName, username, profileAvatar } = suggestedUser;
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
      <button className="follow-button">Follow</button>
    </div>
  );
}
