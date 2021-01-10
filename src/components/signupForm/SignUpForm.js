import { React, useState, useEffect } from "react";
import { useHistory } from "react-router";
import "./SignUpForm.css";
import Logo from "../../assets/logo.svg";
import Button from "../button/Button";

const SignUpForm = () => {

    const history = useHistory();

    //formData : combo for the inputs
    const [formData, setFormData] = useState({
        firstName: undefined,
        lastName: undefined,
        username: undefined,
        email: undefined,
        password: undefined,
        avatar: undefined
    })

    //Body
    const body = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        username: formData.username,
        email: formData.email,
        password: formData.password,
        avatar: formData.avatar
    };

    console.log(body)

    //Fetch function
    const handleCreate = () => {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        };

        fetch("http://localhost:5000/api/users", options)
        //.then((response) => console.log(response.json))
        //.then((json) => console.log(json));
        history.push("/")
    };

    return (
        <div className="signupform__container">
            <img className="loginform__logo" src={Logo} />
            <h4>Create new account</h4>
            <form>
                <label>
                    First name
              <input
                        name="title"
                        onChange={(e) =>
                            setFormData({ ...formData, firstName: e.target.value })}>
                    </input>
                </label>
                <label>
                    Last Name
              <input
                        name="description"
                        onChange={(e) =>
                            setFormData({ ...formData, lastName: e.target.value })}>
                    </input>
                </label>
                <label>
                    Username
              <input
                        name="source"
                        onChange={(e) =>
                            setFormData({ ...formData, username: e.target.value })}>
                    </input>
                </label>
                <label>
                    Email
              <input
                        name="source"
                        onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })}>
                    </input>
                </label>
                <label>
                    Password
              <input
                        name="source"
                        type="password"
                        onChange={(e) =>
                            setFormData({ ...formData, password: e.target.value })}>
                    </input>
                </label>
                <label>
                    Avatar
              <input
                        name="source"
                        onChange={(e) =>
                            setFormData({ ...formData, avatar: e.target.value })}>
                    </input>
                </label>
                <div className="createbutton__container">
                    <Button name="Create" onClick={handleCreate} />
                </div>
            </form>
        </div>
    );
};

export default SignUpForm;
