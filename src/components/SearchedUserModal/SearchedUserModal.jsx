import { SuggestedUserCard } from "../SuggestedUserCard/SuggestedUserCard";

export function SearchedUserModal ({searchedUser}) {
    return(
        <div>
            <SuggestedUserCard suggestedUser= {searchedUser} isSearchedUser/>
        </div>
    )
}