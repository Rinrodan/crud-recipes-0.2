import { useState} from "react";
import { Routes, Route, useNavigate} from 'react-router-dom';
import Navbar from "./navbar/navbar.js";

export default function Header() {

    return(
        <header>
            <Navbar />
        </header>
    )
}