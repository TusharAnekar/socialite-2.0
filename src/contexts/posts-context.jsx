import { createContext, useEffect, useReducer } from "react";
import { getAllPostsService } from "../services/posts-services";
import { initialPostsState, postsReducer } from "../reducers/posts-reducer";

export const PostsContext = createContext()

export function PostsProvider ({children}) {

    const [postsState, postsDispatch] = useReducer(postsReducer, initialPostsState)

    async function getAllUsers () {
        try {
            const response = await getAllPostsService()
            const {status, data: {posts}} = response

            if(status === 200) {
                postsDispatch({type: "SET_ALL_POSTS", payload: posts})
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getAllUsers()
    }, [])

    return(
        <PostsContext.Provider value={{postsState, postsDispatch}}>
            {children}
        </PostsContext.Provider>
    )
}