import { useContext } from "react";
import "./header.css";
import { UsersContext } from "../../contexts/users-context";

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
      <div>
        <input type="text" placeholder="Search users" onChange={handleInput} />
        <div>
          {searchedUsers.map(({ username }) => (
            <p>{username}</p>
          ))}
        </div>
      </div>
    </header>
  );
}
