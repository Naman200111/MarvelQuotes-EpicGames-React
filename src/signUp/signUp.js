import React, { useRef, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Login from "../login/login";

const firebaseConfig = {
  apiKey: "AIzaSyDUVFUdgapP0oVgpCWH-d1Dj5MEaacRkYA",
  authDomain: "authentication-9b59a.firebaseapp.com",
  projectId: "authentication-9b59a",
  storageBucket: "authentication-9b59a.appspot.com",
  messagingSenderId: "159945474388",
  appId: "1:159945474388:web:bc5f9cad99c0984cc208c1",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function SignUp() {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [error, setError] = useState("");

  function handleClick() {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const repeatPassword = confirmPasswordRef.current.value;

    if (email === "") {
      setError("Email is a mandatory field");
      return;
    }
    if (password === "") {
      setError("Choose a password!");
      return;
    }
    if (repeatPassword === "") {
      setError("Re-enter your password!");
      return;
    }

    if (repeatPassword !== password) {
      setError("Passwords don't match");
      return;
    }

    setError("");

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setError("Registered Successfully");
      })
      .catch(() => {
        setError("Invalid Email Id");
      });
  }

  function onLoginClick() {
    console.log("clicked");
    setShowLoginPage(true);
  }

  function showErrors() {
    if (error !== "") {
      return <p>{error}</p>;
    }
  }

  return showLoginPage ? (
    <Login />
  ) : (
    <div className="container">
		<h1>Sign Up</h1>
		<div class="container--content">
			<div className="inputField--div">
			<input className="inputField" ref={emailRef} placeholder="Email ID"></input>
			</div>
			<div className="inputField--div">
			<input className="inputField" type="password" ref={passwordRef} placeholder="Password"></input>
			</div>
			<div className="inputField--div">
			<input className="inputField" type="password" ref={confirmPasswordRef} placeholder="Confirm Password"></input>
			</div>
			<button 
				className="inputField btn-navigate" 
				onClick={handleClick}
			>
				SignUp
			</button>
			<div className="inputField goTo">
			<p>Already a user?</p>
			<button onClick={onLoginClick}>Login</button>
			</div>
			<hr></hr>
			<div class="message">{showErrors()}</div>
		</div>
	</div>
  );
}
