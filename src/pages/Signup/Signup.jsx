import { NavLink } from "react-router-dom";
import "./signup.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth-context";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export function Signup() {
  const [signupDetails, setSignupDetails] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });
  const [isShowPassword, setIsShowPassword] = useState(false);

  const { signupHandler } = useContext(AuthContext);

  function handleInput(e) {
    setSignupDetails({ ...signupDetails, [e.target.name]: e.target.value });
  }

  const handleShowPassword = () => {
    setIsShowPassword((prev) => !prev);
  };

  function handleSubmit(e) {
    e.preventDefault();
    signupHandler(signupDetails);
  }

  const handleDropCopyPaste = (e) => {
    e.preventDefault();
    return false;
  };

  return (
    <div className="signup-container">
      <h1>Socialite</h1>
      <div className="form-details-container">
        <h2>Signup</h2>
        <form className="form-container" onSubmit={handleSubmit}>
          <label>
            First Name
            <input
              type="text"
              name="firstName"
              placeholder="Tushar"
              required
              onChange={handleInput}
            />
          </label>
          <label>
            Last Name
            <input
              type="text"
              name="lastName"
              placeholder="Anekar"
              required
              onChange={handleInput}
            />
          </label>
          <label>
            Username
            <input
              type="text"
              name="username"
              placeholder="tusharanekar"
              required
              onChange={handleInput}
            />
          </label>
          <label className="login-password">
            Password
            <input
              type={isShowPassword ? "text" : "password"}
              name="password"
              placeholder="********"
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
              title="Password should contain min 8 charcters, at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character"
              onPaste={handleDropCopyPaste}
              onDrop={handleDropCopyPaste}
              onCopy={handleDropCopyPaste}
              required
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
          <div className="checkbox-container">
            <input type="checkbox" required />
            <label>I accept all Terms & Conditions</label>
          </div>
          <button type="submit" className="submit-button">
            Create New Account
          </button>
        </form>
        <NavLink to={"/login"}>
          <p className="login-link">Already have an account</p>
        </NavLink>
      </div>
    </div>
  );
}
