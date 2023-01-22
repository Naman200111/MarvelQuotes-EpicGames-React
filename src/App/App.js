import React, { useState } from 'react'
import Login from '../login/login'
import Quotes from './quotes'
import EpicGames from './epicgames'

export default function App() {
    const [logOut, setLogOut] = useState(false);
    function handleClick() {
        setLogOut(true);
    }
    return (
        logOut?
        <Login />:
        <div className='app'>
            <Quotes />
            <EpicGames />
            <div class="footer">
                <button onClick={handleClick}>Log Out</button>
            </div>
        </div>
    )
}
    