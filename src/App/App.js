import React, { useState } from "react";
import Login from "../login/Login";
import Quotes from "./Quotes";
import EpicGames from "./Epicgames";

export default function App() {
  const [logOut, setLogOut] = useState(false);
  function handleClick() {
    setLogOut(true);
  }
  return logOut ? (
    <Login />
  ) : (
    <div className="app">
      <Quotes />
      <EpicGames />
      <div className="footer">
        <button onClick={handleClick}>Log Out</button>
      </div>
    </div>
  );
}
