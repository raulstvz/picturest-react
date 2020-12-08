import React from 'react';
import './userCard.css';

const UserCard = ({avatar, fullName, userName, followingCount}) => {

    return(
        <div className="usercard_container">
            <img src={avatar} alt="User Avatar" className="usercard_avatar"/>
            <span className="usercard_fullName" style={{
                fontSize:"20px",
                fontWeight:"500"
            }}>{fullName}</span>
            <span className="usercard_username" style={{
                fontSize:"14px",
                fontWeight:"400",
                marginTop:"-10px"
            }}>@{userName}</span>
            <span className="usercard_following" style={{
                fontSize:"12px",
                fontWeight:"500",
                color:"#464646"
            }}>{followingCount} Following</span>
        </div>
    )
}

export default UserCard;