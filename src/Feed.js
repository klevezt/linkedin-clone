import { ArtTrack, Event, Photo, PostAdd, YouTube } from "@material-ui/icons";
import React, { useState, useEffect } from "react";

import "./Feed.css";
import Post from "./Post";
import netflix from "./logo.png";
import Modal from "./Modal";
import db from "./firebase";

function Feed() {
  const [postModal, setpostModal] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, []);

  const showModal = () => {
    setpostModal(true);
  };

  const hideModal = () => {
    setpostModal(false);
  };
  const uploadPost = (
    <div className="feed__uploadPost">
      <Modal show={postModal} handleClose={hideModal} />
      <button className="feed__post__button" onClick={showModal}>
        <PostAdd />
        <h4>Start a post</h4>
      </button>
      <div className="feed__post__upload">
        <div className="feed__post__upload__option">
          <Photo style={{ color: "lightblue" }} />
          <h5>Photo</h5>
        </div>
        <div className="feed__post__upload__option">
          <YouTube style={{ color: "lightgreen" }} />
          <h5>Video</h5>
        </div>
        <div className="feed__post__upload__option">
          <Event style={{ color: "yellow" }} />
          <h5>Event</h5>
        </div>
        <div className="feed__post__upload__option">
          <ArtTrack style={{ color: "orange" }} />
          <h5>Write article</h5>
        </div>
      </div>
    </div>
  );
  return (
    <div className="feed">
      {uploadPost}
      <div className="sorter">
        <span className="sort__by">Sort by:</span>
        <select>
          <option>Top</option>
          <option>Recent</option>
        </select>
      </div>
      <div className="posts">
        {posts.map((post) => {
          return (
            <Post
              key={post.id}
              image={post.data.image}
              timestamp={post.data.timestamp}
              title={post.data.title}
              followers={post.data.followers}
              avatarSrc={post.data.avatarSrc}
              message={post.data.message}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Feed;
