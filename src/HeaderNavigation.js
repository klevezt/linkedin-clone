import { Avatar } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import React from "react";
import "./HeaderNavigation.css";

function HeaderNavigation({ Icon, src, title, expand }) {
  return (
    <div className="headerNavigation">
      <div className="headerNavigation__icon">
        {Icon && <Icon />}
        {src && <Avatar src={src} style={{ height: "28px", width: "28px" }} />}
      </div>
      <div className="headerNavigation__title">
        {title}
        {expand ? <ExpandMore /> : null}
      </div>
    </div>
  );
}

export default HeaderNavigation;
