import React from "react";

import "./ActionButton.css";

function ActionButtons({ Icon, title }) {
  return (
    <div className="actionButton">
      <Icon />
      <h4>{title}</h4>
    </div>
  );
}

export default ActionButtons;
