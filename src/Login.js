import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { auth, provider } from "./firebase";
import "./Login.css";

function Login() {
  // to take and parse values with redux
  const dispatch = useDispatch();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            // this gonna take displayname, email and photourl from Google login (email google login popup)
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
            /* redux info will show something like this after logging in (censored):
            displayName(pin):"Dzomba"
            email(pin):"*******@gmail.com"
            photoUrl(pin):"https://lh3.googleusercontent.com/a-/AOh14Giv4yPi7cJYfP69Y733SwG******************"
            */
          })
        );
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
          alt="Gmail"
        />

        <Button variant="contained" color="primary" onClick={signIn}>
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
