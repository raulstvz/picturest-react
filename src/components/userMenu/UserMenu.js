import { React, useState } from 'react';
import { Link } from "react-router-dom";
import './UserMenu.css';
import UserDropdown from '../userDropdown/UserDropdown';
import DownArrow from '../../assets/downarrow.svg'

const UserMenu = ({ user }) => {

    const fullname = `${user.firstName} ${user.lastName}`

    const [active, setActive] = useState(false);

    const toggleActive = () => {
        setActive(!active)
    };

    return (
        <div className="userMenu__container">
            <Link to="/user">
                <img src={user.avatar} alt="UserMenu Avatar" className="usermenu_avatar" />
            </Link>
            {active === true ? (
                <>
                    <img className="usermenu_arrow"
                        src={DownArrow}
                        alt="UserMenu Arrow"
                        onClick={toggleActive}
                        style={{ transform: 'rotate(180deg)' }} />
                    <UserDropdown fullname={fullname} />
                </>
            ) : (
                    <img src={DownArrow} alt="UserMenu Arrow" onClick={toggleActive} />
                )}
        </div>
    )
}

export default UserMenu;