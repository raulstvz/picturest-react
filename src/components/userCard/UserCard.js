import React from 'react';
import './userCard.css';

import { Link } from 'react-router-dom';

const UserCard = ({ user }) => {

    return (
        <div className="usercard_container">
            <Link to="/user">
                <img src={user.avatar} alt="User Avatar" className="usercard_avatar" />
            </Link>
            <span className="usercard_fullName" style={{
                fontSize: "20px",
                fontWeight: "500"
            }}>{user.firstName} {user.lastName}</span>
            <span className="usercard_username" style={{
                fontSize: "14px",
                fontWeight: "400",
                marginTop: "-10px"
            }}>@{user.userName}</span>
            <span className="usercard_following" style={{
                fontSize: "12px",
                fontWeight: "500",
                color: "#464646"
            }}>{user.followers.length} Following</span>
        </div>
    )
}

export default UserCard;