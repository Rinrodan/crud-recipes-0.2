// import { useState } from 'react';
// import { Routes, Route } from 'react-router-dom'
import NewUser from '../utils/register'
import Login from '../utils/login';

export default function LandingPage({isAuthenticated}) {

   


    return (
        <div>
            <h1>LANDING PAGE</h1>
            <Login />
            <NewUser />   
        </div>
    )
}