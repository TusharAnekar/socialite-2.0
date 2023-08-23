import { NavLink, useParams } from "react-router-dom";
import "./profile.css";
import { useContext } from "react";
import { UsersContext } from "../../contexts/users-context";
import { PostsContext } from "../../contexts/posts-context";
import { PostCard } from "../../components/PostCard/PostCard";
import { AuthContext } from "../../contexts/auth-context";
import { SuggestedUsers } from "../../components/SuggestedUsers/SuggestedUsers";
import { EditUserModal } from "../../components/EditUserModal/EditUserModal";

export function Profile() {
  const { profileId } = useParams();
  const { currentUser, logoutUser } = useContext(AuthContext);
  const {
    usersState: { allUsers, isEditUserModal },
    unFollowUser,
    followUser,
    usersDisptach,
  } = useContext(UsersContext);
  const {
    postsState: { allPosts },
  } = useContext(PostsContext);
  const updatedCurrentUser = allUsers?.find(
    ({ _id }) => _id === currentUser?._id
  );
  const userProfile = allUsers?.find(({ _id }) => _id === profileId);
  const {
    _id,
    firstName,
    lastName,
    username,
    bio,
    profileAvatar,
    website,
    following,
    followers,
  } = userProfile;
  const userProfilePosts = allPosts.filter(
    ({ username }) => username === userProfile?.username
  );
  const isUserProfileOfCurrentUser =
    userProfile?.username === currentUser?.username;

  const isUserProfileFollowingCurrentUser = updatedCurrentUser?.following?.some(
    (followingUser) => followingUser?._id === userProfile?._id
  );

  function handleUnfollow() {
    unFollowUser(_id);
  }

  function handleFollow() {
    followUser(_id);
  }

  function handleLogout() {
    logoutUser();
  }

  function handleEdit() {
    usersDisptach({ type: "SET_IS_EDIT_USER_MODAL", payload: true });
  }
  return (
    <div className={"profile-container"}>
      <div className="profile-details-container">
        {isEditUserModal && <EditUserModal userProfile={userProfile} />}
        <div className="image-buttons-container">
          <img src={profileAvatar} alt={firstName} className="profile-image" />
          {isUserProfileOfCurrentUser ? (
            <div>
              <button className="button" onClick={handleEdit}>
                Edit Profile
              </button>
              <button className="button logout" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <div>
              {isUserProfileFollowingCurrentUser ? (
                <button className="button" onClick={handleUnfollow}>
                  Unfollow
                </button>
              ) : (
                <button className="button" onClick={handleFollow}>
                  Follow
                </button>
              )}
            </div>
          )}
        </div>
        <div className="names-bio-website-container">
          <p>
            <strong>
              {firstName} {lastName}
            </strong>
          </p>
          <p>@{username}</p>
          <p>{bio}</p>
          <NavLink to={website} target="_blank" rel="noopener norefferrer">{website}</NavLink>
          <div className="following-follower-container">
            <p>
              <strong>{following.length}</strong> Following
            </p>
            <p>
              <strong>{followers.length}</strong> Followers
            </p>
          </div>
        </div>

        <div>
          {userProfilePosts?.map((post) => (
            <PostCard post={post} key={post?._id} />
          ))}
        </div>
      </div>
      <SuggestedUsers />
    </div>
  );
}
