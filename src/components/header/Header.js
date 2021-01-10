import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.svg";
import Button from "../button/Button";
import UserMenu from "../userMenu/UserMenu";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const Header = ({ user }) => {
  const history = useHistory();

  console.log(Object.keys(user).length === 0, user)

  return (
    <div className="header__container">
      <div
        className="header__logo_button">
        <Link to="/">
          <img src={Logo} alt="Picturest Logo" className="header__logo" />
        </Link>
        <Button name="Home" onClick={() => history.push("/")} />
      </div>
      <div className="header__searchbar" >
        <input className="header__searchbar_input" type="text" placeholder="What inspires you?..." />
        <Button name="Search" />
      </div>
      {Object.keys(user).length !== 0 &&
        <UserMenu user={user} />
      }
      {Object.keys(user).length === 0 &&
          <Button name="Log in" onClick={() => history.push("/login")} style={{ "margin-left": "-20px" }}/>
      }
    </div>
  );
};

export default Header;
