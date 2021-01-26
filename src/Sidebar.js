import { Avatar, IconButton } from "@material-ui/core";
import { Bookmark, Add, Stop } from "@material-ui/icons";
import React from "react";

import "./Sidebar.css";
import { useStateValue } from "./StateProvider";

function Sidebar() {
  const [{ user }, reducer] = useStateValue();

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <div className="sidebar__top__level1">
          <Avatar
            className="sidebar__top__avatar"
            style={{ height: "70px", width: "70px" }}
            src={user.photoURL}
          />
          <h3>{user.displayName}</h3>
          <h5>Web Developer</h5>
        </div>
        <div className="sidebar__top__level2">
          <div className="sidebar__top__level2__row">
            <div className="row__top">
              <h6>Connections</h6>
              <span>13</span>
            </div>
            <h6>Grow your network</h6>
          </div>
          <div className="sidebar__top__level2__row underline">
            <h6>
              <div className="row__top">Access exclusive tools & insights</div>
              <Stop color="error" fontSize="small" /> Try Premium Free for 1
              Month
            </h6>
          </div>
        </div>
        <div className="sidebar__top__level3 flex">
          <Bookmark fontSize="small" />
          <h6>My items</h6>
        </div>
      </div>
      <div className="sidebar__bottom">
        <h5>Groups</h5>
        <div
          className="events flex"
          style={{
            justifyContent: "space-between",
            padding: "10px",
            color: "#5394d4",
          }}
        >
          <h5>Events</h5>
          <IconButton size="small">
            <Add fontSize="small" />
          </IconButton>
        </div>
        <h5>Followed Hashtags</h5>
        <div className="sidebar__bottom__footer">
          <h4>Discover more</h4>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
