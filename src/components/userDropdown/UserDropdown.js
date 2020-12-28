import React from 'react';
import { Link } from "react-router-dom";
import './UserDropdown.css';

const UserDropdown = ({ fullname }) => {
    return (
        <div className="dropdown__container">
            <span className="dropdown__username">{fullname}</span>
            <Link to="/user/updateprofile">
                <span className="dropdown__item">Update Profile</span>
            </Link>
            <Link to="/user/boards">
                <span className="dropdown__item">My boards</span>
            </Link>
            <Link to="/user/pins">
                <span className="dropdown__item">My pins</span>
            </Link>
            <span className="dropdown__item">Log out</span>
        </div>
    )
}

export default UserDropdown;