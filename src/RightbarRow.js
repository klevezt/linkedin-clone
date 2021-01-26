import { Avatar } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import React from "react";

import "./RightbarRow.css";

function RightbarRow({ src, title, subtitle, icon, addicon }) {
  return (
    <div className="rightbarRow">
      {src && (
        <Avatar
          className="rightbarRow__avatar"
          src={src}
          style={{ height: "48px", width: "48px", marginLeft: "10px" }}
        />
      )}
      <div className="rightbarRow__top__row">
        <h2>
          {title}
          {icon && (
            <img
              src="https://static-exp1.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca"
              style={{ height: "14px", width: "14px", marginLeft: "10px" }}
              alt=""
            />
          )}
        </h2>
        <h4>{subtitle}</h4>

        {!addicon ? (
          <button className="rightbarRow__follow__button">
            <Add /> <h4>Follow</h4>
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default RightbarRow;
