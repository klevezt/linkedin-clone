import {
  Search,
  Home,
  People,
  BusinessCenter,
  Message,
  Notifications,
  Apps,
  PostAdd,
} from "@material-ui/icons";
import React from "react";
import "./Header.css";
import HeaderNavigation from "./HeaderNavigation";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://static-exp1.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca"
          alt=""
          className="header__logo"
        />
        <div className="header__input">
          <Search />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__right__option active">
          <HeaderNavigation Icon={Home} title="Home" />
        </div>
        <div className="header__right__option">
          {" "}
          <HeaderNavigation Icon={People} title="My Network" />
        </div>
        <div className="header__right__option">
          <HeaderNavigation Icon={BusinessCenter} title="Jobs" />
        </div>
        <div className="header__right__option">
          <HeaderNavigation Icon={Message} title="Messaging" />
        </div>
        <div className="header__right__option">
          <HeaderNavigation Icon={Notifications} title="Notifications" />
        </div>
        <div className="header__right__option">
          <HeaderNavigation src={user.photoURL} title="Me" expand />
        </div>
        <div className="header__right__part2">
          <div className="header__right__option ">
            <HeaderNavigation Icon={Apps} title="Work" expand />
          </div>
          <div className="header__right__option ">
            <HeaderNavigation Icon={PostAdd} title="Post a job" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
