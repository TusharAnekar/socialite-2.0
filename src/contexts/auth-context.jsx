import { createContext, useState } from "react";
import { loginAuthService, signupAuthService } from "../services/auth-services";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext()

export function AuthProvider ({children}) {

    const localStorageUser = JSON.parse(localStorage.getItem("loginDetails")) 

    const [token, setToken] = useState(localStorageUser?.token)
    const [currentUser, setCurrentUser] = useState(localStorageUser?.user)

    const navigate = useNavigate()

    async function loginHandler ({username, password}) {
        try {
            const response = await loginAuthService(username, password)
            const {
                status,
                data: { foundUser, encodedToken },
              } = response;
              

              if(status === 200) {
                localStorage.setItem("loginDetails", JSON.stringify({user: foundUser, token: encodedToken}))
                setToken(encodedToken)
                setCurrentUser(foundUser)
                navigate("/")
              }
        } catch (error) {
            console.error(error)
        }
    }

    async function signupHandler ({firstName, lastName, username, password}) {
        try {
            const response = await signupAuthService(username, password, firstName,
                lastName)
            const {status, data: { foundUser, encodedToken },
        } = response;

        if(status === 201) {
            localStorage.setItem("loginDetails", JSON.stringify({user: foundUser, token: encodedToken}))
            setToken(token)
            setCurrentUser(foundUser)
            navigate("/login")
        }
        } catch (error) {
            console.error(error)
        }
    }

    return(
        <AuthContext.Provider value={{loginHandler, signupHandler, token, currentUser}}>
            {children}
        </AuthContext.Provider>
    )
}