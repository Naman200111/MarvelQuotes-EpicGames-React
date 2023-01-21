import React, { useState } from 'react'
import Login from '../login/login'

export default function App() {
    const [logOut, setLogOut] = useState(false);
    function handleClick() {
        setLogOut(true);
    }
    return (
        logOut?
        <Login />:
        <div>
            <button onClick={handleClick}>Log Out</button>
        </div>
    )
}
