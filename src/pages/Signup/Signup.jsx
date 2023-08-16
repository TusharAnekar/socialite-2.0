import { NavLink } from "react-router-dom";
import "./signup.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth-context";
export function Signup() {

    const [signupDetails, setSignupDetails] = useState({firstName: "", lastName: "", username: "", password: ""})

    const {signupHandler} = useContext(AuthContext)

    function handleInput (e) {
        setSignupDetails({...signupDetails, [e.target.name]: e.target.value})
    }

    function handleSubmit (e) {
        e.preventDefault()
        signupHandler(signupDetails)
    }

  return (
    <div className="signup-container">
      <h1>Socialite</h1>
      <div className="form-details-container">
        <h2>Signup</h2>
        <form className="form-container" onSubmit={handleSubmit}>
          <label>
            First Name
            <input type="text" name="firstName" placeholder="Tushar" required onChange={handleInput}/>
          </label>
          <label>
            Last Name
            <input type="text" name="lastName" placeholder="Anekar" required onChange={handleInput}/>
          </label>
          <label>
            Username
            <input type="text" name="username" placeholder="tusharanekar" required onChange={handleInput}/>
          </label>
          <label>
            Password
            <input type="password" name="password" placeholder="********" required onChange={handleInput}/>
          </label>
          <div className="checkbox-container">
            <input type="checkbox" required/>
            <label>I accept all Terms & Conditions</label>
          </div>
          <button type="submit" className="submit-button">Create New Account</button>
        </form>
        <NavLink to={"/login"}>
          <p className="login-link">Already have an account</p>
        </NavLink>
      </div>
    </div>
  );
}
