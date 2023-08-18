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

  const userForSuggestedFollowers = allUsers.find(
    ({ _id }) => _id === currentUser._id
  );

  const suggestedUsers = allUsers?.filter(
    ({ _id }) =>
      userForSuggestedFollowers?._id !== _id &&
      userForSuggestedFollowers.following.some((item) => item._id !== _id)
  );

  return (
    <div className="suggested-users-container">
      <h3>Suggested Users</h3>
      <div className="suggested-users-cards-container">
        {
            suggestedUsers?.map((suggestedUser) => <SuggestedUserCard key={suggestedUser._id} suggestedUser={suggestedUser}/>)
        }
      </div>
    </div>
  );
}
