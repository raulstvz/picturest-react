import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.svg";
import Button from "../button/Button";
import UserMenu from "../userMenu/UserMenu";
import { Link } from "react-router-dom";

const Header = ({ avatar, fullname }) => {
  return (
    <div className="header__container">
      <div
        className="header__logo_button"
        style={{
          width: "200px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Link to="/">
          <img src={Logo} alt="Picturest Logo" className="header__logo" />
        </Link>
        <Button name="Home" />
      </div>
      <UserMenu avatar={avatar} fullname={fullname} />
    </div>
  );
};

export default Header;
