import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App"
import Login from "./login/login";

const root = ReactDOM.createRoot(document.getElementById("root"));
const loggedIn = window.localStorage.getItem("isLoggedIn");
console.log(loggedIn);
function mainpage() {
    if(loggedIn)return <App />
    return <Login />
}

root.render(mainpage());
