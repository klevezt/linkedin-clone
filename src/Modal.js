import { IconButton, Avatar } from "@material-ui/core";
import {
  Close,
  Public,
  ExpandMore,
  Add,
  Photo,
  YouTube,
  Description,
  Comment,
} from "@material-ui/icons";
import React, { useState, useEffect, useRef } from "react";

import "./Modal.css";
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import firebase from "firebase";

const Modal = ({ handleClose, show }) => {
  const [{ user }, reducer] = useStateValue();

  const [backdrop, setBackdrop] = useState(false);
  const [textArea, setTextArea] = useState("");
  const [disabledPostButton, setDisabledPostButton] = useState(false);
  const textAreaInput = useRef();

  const addHashtag = (e) => {
    e.preventDefault();
    let temp = textArea;
    temp === ""
      ? setTextArea(temp.concat("#"))
      : setTextArea(temp.concat(" #"));
    focusTextAreaInput();
    setDisabledPostButton(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      avatarSrc: user.photoURL,
      followers: "100",
      image: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      title: user.displayName,
      message: textArea,
    });
    setTextArea("");
    handleClose();
  };

  const handleTextarea = (e) => {
    setTextArea(e.target.value);
  };

  const handleBackdrop = () => {
    setBackdrop(false);
    handleClose();
  };

  useEffect(() => {
    setBackdrop(show);
    focusTextAreaInput();
  }, [show]);

  useEffect(() => {
    textArea === ""
      ? setDisabledPostButton(false)
      : setDisabledPostButton(true);
  }, [textArea]);

  const focusTextAreaInput = () => textAreaInput.current.focus();

  const showHideClassName = show ? "modal display-block" : "modal display-none";
  //   const showBackdrop = show ? "display-block" : "display-none";
  return (
    <>
      {backdrop ? (
        <div className="backdrop" onClick={handleBackdrop}></div>
      ) : null}
      <div className={showHideClassName}>
        <section className="modal-main">
          <div className="modal__header">
            <h5>Create a post</h5>
            <div className="modal__header__close">
              <IconButton onClick={handleClose}>
                <Close />
              </IconButton>
            </div>
          </div>
          <div className="modal__body">
            <div className="modal__body__top">
              <Avatar
                className="modal__avatar"
                style={{ height: "45px", width: "45px" }}
                src={user.photoURL}
              />
              <div className="modal__avatar__info">
                <h3>{user.displayName}</h3>
                <button className="modal__public__button">
                  <Public fontSize="small" /> <h4>Anyone</h4>
                  <ExpandMore fontSize="small" />
                </button>
              </div>
            </div>
            <form>
              <div className="modal__body__text">
                <textarea
                  value={textArea}
                  ref={textAreaInput}
                  onChange={handleTextarea}
                  rows={5}
                  placeholder="What do you want to talk about?"
                ></textarea>
                <button onClick={addHashtag}>Add hashtag</button>
                <div className="modal__body__text__icons">
                  <IconButton>
                    <Add />
                  </IconButton>
                  <IconButton>
                    <Photo />
                  </IconButton>
                  <IconButton>
                    <YouTube />
                  </IconButton>
                  <IconButton>
                    <Description />
                  </IconButton>
                  <IconButton>
                    <Comment fontSize="small" />
                    <h5 className="anyone">Anyone</h5>
                  </IconButton>
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    disabled={!disabledPostButton}
                    className="modal__post__button"
                  >
                    Post
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Modal;
