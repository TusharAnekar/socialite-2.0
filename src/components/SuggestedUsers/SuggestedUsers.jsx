import { useContext } from "react";
import "./suggestedUsers.css";
import { AuthContext } from "../../contexts/auth-context";
import { UsersContext } from "../../contexts/users-context";
import { SuggestedUserCard } from "../SuggestedUserCard/SuggestedUserCard";

export function SuggestedUsers() {
  const { currentUser } = useContext(AuthContext);
  const {
    usersState: { allUsers },
  } = useContext(UsersContext);

  const updatedCurrentUser = allUsers.find(
    ({ _id }) => _id === currentUser._id
  );

  const suggestedUsers = allUsers?.filter(
    (singleUser) =>
      singleUser?.username !== updatedCurrentUser?.username &&
      !updatedCurrentUser?.following?.some(
        ({ username }) => username === singleUser?.username
      )
  );

  return (
    <div className="suggested-users-container">
      <h3>Suggested Users</h3>
      <div className="suggested-users-cards-container">
        {suggestedUsers?.map((suggestedUser) => (
          <SuggestedUserCard
            key={suggestedUser._id}
            suggestedUser={suggestedUser}
          />
        ))}
      </div>
    </div>
  );
}
