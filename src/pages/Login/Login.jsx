import { NavLink } from "react-router-dom";
import "./login.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth-context";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export function Login() {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });
  const [isShowPassword, setIsShowPassword] = useState(false);

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
      password: "Tusharanekar123$",
    });
  }

  const handleShowPassword = () => {
    setIsShowPassword((prev) => !prev);
  };

  const handleDropCopyPaste = (e) => {
    e.preventDefault();
    return false;
  };

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
          <label className="login-password">
            Password
            <input
              type={isShowPassword ? "text" : "password"}
              placeholder="********"
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
              title="Password should contain min 8 charcters, at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character"
              name="password"
              onPaste={handleDropCopyPaste}
              onDrop={handleDropCopyPaste}
              onCopy={handleDropCopyPaste}
              required
              value={loginDetails.password}
              onChange={handleInput}
            />
            {isShowPassword ? (
              <VisibilityOffIcon
                className="visibility-icon"
                onClick={handleShowPassword}
              />
            ) : (
              <VisibilityIcon
                className="visibility-icon"
                onClick={handleShowPassword}
              />
            )}
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
