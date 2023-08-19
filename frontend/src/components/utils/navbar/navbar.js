import { useEffect, useState} from "react";
import { Routes, Route, useNavigate, Link} from 'react-router-dom';
import styles from './navbar.module.css';
const Navigate = useNavigate;

export default function Navbar(isAuthenticated) {

    const url = window.location.href;
  
    // window.onload = function() {
    //     const url = window.location.href;
    //     const loginButton = document.getElementById("loginButton");
    //     const registerButton = document.getElementById("registerButton");
    //     console.log(loginButton);
    //     if (url.includes("login")) {
    //       loginButton.style.display = "none";
    //     if (url.includes("register")) {
    //         registerButton.style.display = "none";
    //         }}
    //   };
    
  
    
   


    console.log({url})
    return(
    
        <div className={styles.navBarContainer}>
            {!url.includes("home") 
            && <a href="/home" className={styles.navButton}><div className={styles.buttonContent} id ="homeButton">Home</div></a>}
            {!url.includes("login") 
            && 
            <a href="/login" className={styles.navButton}><div className={styles.buttonContent} id ="loginButton">Login</div></a>}
            {!url.includes("register") 
            && 
            <a href="/register" className={styles.navButton}><div className={styles.buttonContent} id ="registerButton">Register</div></a>}
        </div>
        
    )
}