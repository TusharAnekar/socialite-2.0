import { createContext, useContext, useEffect, useReducer } from "react";
import { addPostToBookmarksService, getAllUserBookmarkedPostsService, getAllUsersService } from "../services/users-services";
import { initialUsersState, usersReducer } from "../reducers/users-reducer";
import { AuthContext } from "./auth-context";

export const UsersContext = createContext()

export function UsersProvider ({children}) {
    const {token} = useContext(AuthContext)

    const [usersState, usersDisptach] = useReducer(usersReducer, initialUsersState)

    async function getAllUsers () {
        try {
            const response = await getAllUsersService()
            const {status, data: {users}} = response

            if(status === 200) {
                usersDisptach({type: "GET_ALL_USERS", payload: users})
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getAllUsers()

        async function getAllBookmarksOfUser () {
            try {
                const response = await getAllUserBookmarkedPostsService(token)
                const {status, data: {bookmarks}} = response
    
                if(status===200) {
                    usersDisptach({type: "SET_USER_BOOKMARKS", payload: bookmarks})
                }
            } catch (error) {
                console.error(error)
            }
        }

        token && getAllBookmarksOfUser()
    }, [token])

    async function addToBookamarks (postId) {
        try {
            const response = await addPostToBookmarksService(postId, token)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    const getIsPostInBookmarks = (_id) => usersState?.userBookmarks?.some((bookmarkPost) => bookmarkPost._id === _id)

    return(
        <UsersContext.Provider value={{usersState, usersDisptach, addToBookamarks, getIsPostInBookmarks}}>
            {children}
        </UsersContext.Provider>
    )
}