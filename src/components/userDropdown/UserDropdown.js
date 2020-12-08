import React from 'react';
import './UserDropdown.css';

const UserDropdown = ({fullname}) => {
    return (
        <div className="dropdown__container">
            <span style={{
                    fontSize:"12px",
                    fontWeight:"500",
                    color:"#464646"
                }}>{fullname}
            </span>
            <span style={{
                    fontSize:"14px",
                    fontWeight:"500"
            }}>Update Profile</span>
            <span style={{
                fontSize:"14px",
                fontWeight:"500"
            }}>My boards</span>
            <span style={{
                    fontSize:"14px",
                    fontWeight:"500"
            }}>My pins</span>
            <span style={{
                    fontSize:"14px",
                    fontWeight:"500"
            }}>Log out</span>
        </div>
    )
}

export default UserDropdown;