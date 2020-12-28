import React from 'react';
import { Link } from 'react-router-dom';
import './userCard.css';

const UserCard = ({ user }) => {

    return (
        <div className="usercard_container">
            <Link to="/user">
                <img src={user.avatar} alt="User Avatar" className="usercard_avatar" />
            </Link>
            <span className="usercard_fullName">{user.firstName} {user.lastName}</span>
            <span className="usercard_username">@{user.username}</span>
            <span className="usercard_following">{user.followers.length} Following</span>
        </div>
    )
}

export default UserCard;