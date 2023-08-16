import axios from "axios";

export const loginAuthService = async (username, password) =>
  await axios.post("/api/auth/login", {
    username,
    password,
  });

export const signupAuthService = async (
  username,
  password,
  firstName,
  lastName
) =>
  await axios.post("/api/auth/signup", {
    username,
    password,
    firstName,
    lastName,
  });
