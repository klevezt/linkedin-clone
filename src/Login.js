import React from "react";
import TextField from "@material-ui/core/TextField";
import "./Login.css";
import LinkedIn from "./LI-Logo.png";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
  const [state, dispatch] = useStateValue();

  const handleLoginWithGoogle = () => {
    auth
      .signInWithPopup(provider)
      .then(
        (result) =>
          dispatch({
            type: actionTypes.SET_USER,
            user: result.user,
          })
        // console.log(result)
      )
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="login">
      <img src={LinkedIn} alt="" style={{ objectFit: "contain", height: 30 }} />

      <div className="login__body">
        <h1>Sign in</h1>
        <h5>Stay updated on your professional world</h5>
        <div className="login__body__input">
          <TextField
            id="outlined-basic"
            label="Email or Phone"
            variant="outlined"
            type="text"
            fullWidth
          />
        </div>
        <div className="login__body__input">
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
          />
        </div>

        <button className="forgot__passwd">Forgot password?</button>
        <button className="sign__in">Sign in</button>
        <div className="sorter">
          <span className="login__or">Or</span>
        </div>
        <button
          className="sign__in__withGoogle"
          onClick={handleLoginWithGoogle}
        >
          {" "}
          <img
            src="https://upload-icon.s3.amazonaws.com/uploads/icons/png/2659939281579738432-512.png"
            alt=""
            style={{ objectFit: "contain", height: 20 }}
          />{" "}
          Sign in with Google
        </button>
      </div>
    </div>
  );
}

export default Login;
