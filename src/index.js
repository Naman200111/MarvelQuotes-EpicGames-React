// import { initializeApp } from 'firebase/app'  
import React from "react"
import ReactDOM from "react-dom/client"
import Login from "./login/login"
import SignUp from './signUp/signUp'

// const firebaseConfig = {
//   apiKey: "AIzaSyDUVFUdgapP0oVgpCWH-d1Dj5MEaacRkYA",
//   authDomain: "authentication-9b59a.firebaseapp.com",
//   projectId: "authentication-9b59a",
//   storageBucket: "authentication-9b59a.appspot.com",
//   messagingSenderId: "159945474388",
//   appId: "1:159945474388:web:bc5f9cad99c0984cc208c1"
// };

// const app = initializeApp(firebaseConfig)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SignUp />)