import {React, useState} from 'react';
import './UserMenu.css';
import UserDropdown from '../userDropdown/UserDropdown';

import DownArrow from '../../assets/downarrow.svg'

const UserMenu = ({avatar, fullname}) => {
  
    const [active, setActive] = useState(false);

    const toggleActive = () => {
        setActive(!active)
    };

    return(
        <div className="userMenu__container">
            <img src={avatar} alt="UserMenu Avatar" className="usermenu_avatar"/>
            {active === true ? (
            <>
                <img 
                    src={DownArrow} 
                    alt="UserMenu Arrow" 
                    onClick={toggleActive}
                    style={{transform: 'rotate(180deg)'}}/>
                <UserDropdown fullname={fullname} />
            </>
            ) : (
                <img src={DownArrow} alt="UserMenu Arrow" onClick={toggleActive}/>
            )}
        </div>
    )
}

export default UserMenu;