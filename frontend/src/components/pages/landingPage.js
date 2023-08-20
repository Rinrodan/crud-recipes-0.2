// import { useState } from 'react';
// import { Routes, Route } from 'react-router-dom'
import NewUser from '../utils/newUser'
import Login from '../utils/login';

export default function LandingPage() {

   

    function createAccountShow() {
        var x = document.getElementById("newUserElemet");
        if (x && x.items) {
        console.log(x)
        if (x.style.visibility === "hidden") {
          x.style.visibility = "visible";
        } else {
          x.style.visibility = "hidden"; }}}
    return (
        <div>
            <h1>LANDING PAGE</h1>
            <Login />
            <button className="button" onClick={createAccountShow()}>Create Account</button>
           <div id='newUserElemet' style={{backgroundColor: "lightblue", visibility:"visible"}}>
            <NewUser />
           </div>      
        </div>
    )
}