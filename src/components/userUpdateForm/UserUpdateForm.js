import { React, useState } from "react";
import { useHistory } from "react-router";
import "./UserUpdateForm.css";
import Button from "../button/Button";

const UserUpdateForm = ({ user }) => {
    
    const history = useHistory();

    //formData : combo for the inputs
    const [formData, setFormData] = useState({
        avatar: user.avatar,
        username: user.username,
        email: user.email,
    })

    //console.log(formData)

    //Body
    const body = {
        avatar: formData.avatar,
        username: formData.username,
        email: formData.email,
    };

    //Fetch function
    const userId = user._id
    const handleUpdate = () => {
        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        };
        //console.log(body)

        fetch("http://localhost:5000/api/users/" + userId, options)
        //.then((response) => console.log(response.json))
        //.then((json) => console.log(json));
    };


    return (
        <div>
            <div className="userupdateform__container">
                <div className="userupdateform__header">
                    <h2>Edit Profile</h2>
                    <img src={user.avatar} alt="User Avatar" className="usercard_avatar" />
                </div>
                <form>
                    <h4>Update your profile</h4>
                    <label>
                        Avatar (url)
              <input
                            name="avatar"
                            defaultValue={user.avatar}
                            onChange={(e) =>
                                setFormData({ ...formData, avatar: e.target.value })}>
                        </input>
                    </label>
                    <label>
                        Username
              <input
                            name="username"
                            defaultValue={user.username}
                            onChange={(e) =>
                                setFormData({ ...formData, username: e.target.value })}>
                        </input>
                    </label>
                    <label>
                        Email
              <input
                            name="email"
                            defaultValue={user.email}
                            onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })}>
                        </input>
                    </label>
                    <div className="updatebutton__container">
                        <Button name="Update" onClick={handleUpdate} />
                    </div>
                </form>
            </div>
            <div className="backbutton__container">
                    <Button name="Back" onClick={() => history.goBack()}/>
            </div>
        </div>
    );
};

export default UserUpdateForm;
