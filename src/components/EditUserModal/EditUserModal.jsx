import { useContext, useState } from "react";
import "./editUserModal.css";
import { UsersContext } from "../../contexts/users-context";

export function EditUserModal({ userProfile }) {
  const { profileAvatar, firstName, lastName, bio, website } = userProfile;
  const [userProfileDetails, setUserProfileDetails] = useState({});

  const {usersDisptach, editUserDetails} = useContext(UsersContext)

  function handleInput(e) {
    setUserProfileDetails({
      ...userProfileDetails,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    editUserDetails(userProfileDetails)
    usersDisptach({type: "SET_IS_EDIT_USER_MODAL", payload: false})
  }

  function handleCancel (e) {
    e.preventDefault()
    usersDisptach({type: "SET_IS_EDIT_USER_MODAL", payload: false})
  }

  return (
    <div className="edit-user-modal-container">
      <form onSubmit={handleSubmit} className="form-container">
        <label>
          Profile URL:
          <input
            type="url"
            name="profileAvatar"
            defaultValue={profileAvatar}
            required
            className="input"
            onChange={handleInput}
          />
        </label>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            defaultValue={firstName}
            required
            className="input"
            onChange={handleInput}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            defaultValue={lastName}
            required
            className="input"
            onChange={handleInput}
          />
        </label>

        <label>
          Bio:
          <textarea
            className="bio-textarea"
            name="bio"
            cols="30"
            rows="5"
            defaultValue={bio}
            required
            onChange={handleInput}
          ></textarea>
        </label>

        <label>
          Website:
          <input
            type="url"
            name="website"
            defaultValue={website}
            required
            className="input"
            onChange={handleInput}
          />
        </label>
        <button type="submit" className="update-button">Update</button>
        <button className="cancel-button" onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
}
