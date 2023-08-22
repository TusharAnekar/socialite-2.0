import { createContext, useState } from "react";
import { loginAuthService, signupAuthService } from "../services/auth-services";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const localStorageUser = JSON.parse(localStorage.getItem("loginDetails"));
  const localIsLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));

  const [token, setToken] = useState(localStorageUser?.token);
  const [currentUser, setCurrentUser] = useState(localStorageUser?.user);
  const [isLoggedIn, setIsLoggedIn] = useState(localIsLoggedIn ?? false);

  const navigate = useNavigate();

  async function loginHandler({ username, password }) {
    try {
      const response = await loginAuthService(username, password);
      const {
        status,
        data: { foundUser, encodedToken },
      } = response;

      if (status === 200) {
        localStorage.setItem(
          "loginDetails",
          JSON.stringify({ user: foundUser, token: encodedToken })
        );
        localStorage.setItem("isLoggedIn", JSON.stringify(true));
        setToken(encodedToken);
        setCurrentUser(foundUser);
        setIsLoggedIn(true);
        toast.success("Logged in succuessfully.")
        navigate("/");
      }
    } catch (error) {
      const {
        response: { status },
      } = error;
      if (status === 401) {
        toast.error("Invalid password! Please try again!");
      } else if (status === 404) {
        toast.error("Credentials not found! Please signup before logging in!");
      } else {
        console.error(error);
        toast.error("Unable to sign in!");
      }
    }
  }

  async function signupHandler({ firstName, lastName, username, password }) {
    try {
      const response = await signupAuthService(
        username,
        password,
        firstName,
        lastName
      );
      const {
        status,
        data: { foundUser, encodedToken },
      } = response;

      if (status === 201) {
        localStorage.setItem(
          "loginDetails",
          JSON.stringify({ user: foundUser, token: encodedToken })
        );
        setToken(token);
        setCurrentUser(foundUser);
        toast.success("Signed up successfully.")
        navigate("/login");
      }
    } catch (error) {
      const {
        response: { status },
      } = error;
      if (status === 422) {
        toast.error(
          "Username already exists! Please try signing up with another username!"
        );
      } else {
        console.error(error);
        toast.error("Unable to sign up!");
      }
    }
  }

  function logoutUser() {
    toast.error("Logged out successfully.")
    setToken(null);
    setCurrentUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("loginDetails");
    navigate("/login");
  }

  return (
    <AuthContext.Provider
      value={{ loginHandler, signupHandler, token, currentUser, isLoggedIn, logoutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}
