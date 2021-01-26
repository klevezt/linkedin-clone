import { Avatar } from "@material-ui/core";
import {
  MoreHoriz,
  Public,
  ThumbUp,
  QuestionAnswer,
  Share,
  NearMe,
} from "@material-ui/icons";
import React from "react";

import ActionButton from "./ActionButton";

import "./Post.css";

function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}
function timeDiff(curr, prev) {
  var ms_Min = 60 * 1000; // milliseconds in Minute
  var ms_Hour = ms_Min * 60; // milliseconds in Hour
  var ms_Day = ms_Hour * 24; // milliseconds in day
  var ms_Mon = ms_Day * 30; // milliseconds in Month
  var ms_Yr = ms_Day * 365; // milliseconds in Year
  var diff = curr - prev; //difference between dates.
  // If the diff is less then milliseconds in a minute
  // if (diff < ms_Min) {
  //   return Math.round(diff / 1000) + " s ";

  // If the diff is less then milliseconds in a Hour
  // } else
  if (diff < ms_Hour) {
    return Math.round(diff / ms_Min) + " m ";

    // If the diff is less then milliseconds in a day
  } else if (diff < ms_Day) {
    return Math.round(diff / ms_Hour) + " h ";

    // If the diff is less then milliseconds in a Month
  } else if (diff < ms_Mon) {
    return "Around " + Math.round(diff / ms_Day) + " d ";

    // If the diff is less then milliseconds in a year
  } else if (diff < ms_Yr) {
    return "Around " + Math.round(diff / ms_Mon) + " months ";
  } else {
    return "Around " + Math.round(diff / ms_Yr) + " years ";
  }
}

function Post({ avatarSrc, message, title, followers, timestamp, image }) {
  const NowTimeStamp = new Date(Date.now());
  const PostTimeStamp = new Date(timestamp?.toDate());
  // console.log(NowTimeStamp);
  // console.log(PostTimeStamp);
  console.log(timeDiff(NowTimeStamp, PostTimeStamp));

  return (
    <div className="post">
      <div className="x">
        <div className="x_2">
          <Avatar
            src={avatarSrc}
            style={{ height: 50, width: 50, margin: 10, marginTop: 0 }}
          />
          <div className="x_44">
            <div className="x_3">
              <h4>{title}</h4>
              <MoreHoriz />
            </div>
            <h6>{followers} followers</h6>
            <div className="global">
              <ul>
                <li>{timeDiff(NowTimeStamp, PostTimeStamp)}</li>
                <li>
                  <Public />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="post__information">
        <h2> {truncate(message, 180)} </h2>
      </div>
      {image ? (
        <div className="post__image">
          <img src={image} alt="" />
        </div>
      ) : null}
      <div className="post__action__buttons">
        <ActionButton Icon={ThumbUp} title="Like" />
        <ActionButton Icon={QuestionAnswer} title="Comment" />
        <ActionButton Icon={Share} title="Share" />
        <ActionButton Icon={NearMe} title="Send" />
      </div>
    </div>
  );
}

export default Post;
