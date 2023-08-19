import { useState} from "react";
import { Routes, Route, useNavigate, Link} from 'react-router-dom';
import styles from './navbar.module.css';
const Navigate = useNavigate;

export default function Navbar() {
    const button = document.querySelector('styles.navButton');
    if (window.location.href.indexOf(button.classList.contains('navButto')) > -1) {
        button.style.display = 'none';
    }
    return(
    
        <div className={styles.navBarContainer}>
            {}
            <a href="/" className={styles.navButton}><div className={styles.buttonContent} name="{href}">Home</div></a>
            <a href="/login" className={styles.navButton}><div className={styles.buttonContent}>Login</div></a>
            <a href="/register" className={styles.navButton}><div className={styles.buttonContent}>Register</div></a>
        </div>
        
    )
}