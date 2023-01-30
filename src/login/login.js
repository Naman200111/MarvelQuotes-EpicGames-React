import React, { useState, useRef } from "react";
import SignUp from "../signUp/signUp";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import App from "../App/App";

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

export default function Login() {
	const [showSignUpPage, setShowSignUpPage] = useState(false);
	const [showApp, setShowApp] = useState(false);
	const [error, setError] = useState("");

	const emailRef = useRef("");
	const passwordRef = useRef("");

	function handleClick() {
		setShowSignUpPage(true);
	}
	function handleLogin() {
		const email = emailRef.current.value;
		const password = passwordRef.current.value;

		if (email === "") {
			setError("Enter your Email Id!");
			return;
		}
		if (password === "") {
			setError("Enter your Password!");
			return;
		}

		signInWithEmailAndPassword(auth, email, password)
		.then(() => {
			setShowApp(true);
			setError("");
			window.localStorage.setItem("isLoggedIn", true)
		})
		.catch(() => {
			setError("Invalid Credentials");
		});
	}

	function renderError() {
		if (error !== "") {
		return <p>{error}</p>;
		}
	}

	return showSignUpPage ? 
		<SignUp />
		:showApp ? 
		(<App />) : 
		(
			<div className="container">
				<h1>Log In</h1>
				<div class="container--content">
					<div class="inputField--div">
					<input
						className="inputField"
						ref={emailRef}
						placeholder="Email ID"
					></input>
					</div>
					<div class="inputField--div">
					<input
						className="inputField"
						type="password"
						ref={passwordRef}
						placeholder="Password"
					></input>
					</div>
					<button className="inputField btn-navigate" onClick={handleLogin}>
					Login
					</button>
					<div className="inputField goTo">
					<p>Not already a user?</p>
					<button onClick={handleClick}>Sign Up</button>
					</div>
					<hr></hr>
					<div class="message">{renderError()}</div>
				</div>
			</div>
	);
}
