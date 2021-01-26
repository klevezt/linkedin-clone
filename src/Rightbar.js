import { ArrowDropDown, ArrowRightAlt, Info } from "@material-ui/icons";
import React from "react";
import RightbarRow from "./RightbarRow";
import "./Rightbar.css";
import CopyrightLogo from "./LI-Logo.png";

function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbar__card1">
        <div className="rightbar__level1">
          <h4>Add to your feed</h4> <Info />
        </div>
        <div className="rightbar__level2">
          <RightbarRow
            src="https://avatars3.githubusercontent.com/u/36492558?s=460&u=d41adf0496ff1e575eccdf1335102198f6711403&v=4"
            title="Person 1"
            subtitle="Developer"
            icon
          />
          <RightbarRow
            src="https://avatars3.githubusercontent.com/u/36492558?s=460&u=d41adf0496ff1e575eccdf1335102198f6711403&v=4"
            title="Person 2"
            subtitle="CFO"
          />
          <RightbarRow
            src="https://avatars3.githubusercontent.com/u/36492558?s=460&u=d41adf0496ff1e575eccdf1335102198f6711403&v=4"
            title="Person 3"
            subtitle="Manager"
          />
        </div>
        <div className="rightbar__level3">
          <h3>View all recommendations </h3> <ArrowRightAlt />
        </div>
      </div>
      <div className="rightbar__card2">
        <div className="rightbar__level1">
          <h4>Today’s most viewed courses</h4> <Info />
        </div>
        <div className="rightbar__level2">
          <ol>
            <li>
              <RightbarRow title="Person 4" subtitle="Designer" addicon />
            </li>
          </ol>
        </div>
        <div className="rightbar__level3">
          <h3>Show more on LinkedIn Learning</h3> <ArrowRightAlt />
        </div>
      </div>
      <div className="rightbar__card3">
        <ul>
          <li>About</li>
          <li>Accessibility</li>
          <li>Help Center</li>
          <li>
            Privacy & Terms <ArrowDropDown fontSize="small" />{" "}
          </li>
          <li>Ad Choices</li>
          <li>Advertising</li>
          <li>
            Business Services <ArrowDropDown fontSize="small" />{" "}
          </li>
          <li>Get the LinkedIn app</li>
          <li>More</li>
        </ul>
        <div className="rightbar__footer">
          <img src={CopyrightLogo} alt="" />
          <h5>LinkedIn Corporation © 2021</h5>
        </div>
      </div>
    </div>
  );
}

export default Rightbar;
