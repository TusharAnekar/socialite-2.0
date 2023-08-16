import { NavLink } from "react-router-dom";
import "./login.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth-context";
export function Login() {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

  const { loginHandler } = useContext(AuthContext);

  function handleInput(e) {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    loginHandler(loginDetails);
  }

  function handleTestUserLogin() {
    setLoginDetails({
      ...loginDetails,
      username: "tusharanekar",
      password: "tusharanekar123",
    });
  }
  return (
    <div className="login-container">
      <h1>Socialite</h1>
      <div className="login-details-container">
        <h2>Login</h2>
        <form className="form-container" onSubmit={handleSubmit}>
          <label>
            Username
            <input
              type="text"
              placeholder="tusharanekar"
              name="username"
              required
              value={loginDetails.username}
              onChange={handleInput}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              placeholder="*********"
              name="password"
              required
              value={loginDetails.password}
              onChange={handleInput}
            />
          </label>
          <button type="submit">Login</button>
          <button className="login-test-button" onClick={handleTestUserLogin}>
            Login with Test User
          </button>
        </form>
        <NavLink to={"/signup"}>
          <p className={"new-account-link"}>Create New Account</p>
        </NavLink>
      </div>
    </div>
  );
}
