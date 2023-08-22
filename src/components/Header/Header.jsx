import { useContext } from "react";
import "./header.css";
import { UsersContext } from "../../contexts/users-context";
import { SearchedUserModal } from "../SearchedUserModal/SearchedUserModal";

export function Header() {
  const {
    usersState: { allUsers, inputSearch },
    usersDisptach,
  } = useContext(UsersContext);

  function handleInput(e) {
    usersDisptach({ type: "INPUT_SEARCH", payload: e.target.value });
  }

  const searchedUsers = inputSearch.length
    ? allUsers.filter(({ username }) =>
        username.toLowerCase().includes(inputSearch.toLowerCase())
      )
    : [];

  return (
    <header className="header-container">
      <h1>Socialite</h1>
      <div className="input-users-container">
        <input type="text" placeholder="Search users" onChange={handleInput} />
        <div className="searched-users-container">
          {searchedUsers?.map((searchedUser) => (
            <SearchedUserModal searchedUser={searchedUser} />
          ))}
        </div>
      </div>
    </header>
  );
}
