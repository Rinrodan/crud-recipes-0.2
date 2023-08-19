import { Routes, Route, Switch, Redirect, Navigate } from 'react-router-dom';

import './App.css';
import LandingPage from './components/pages/landingPage';
import Login from './components/utils/login';
import Register from './components/utils/register';
import React, { useState } from 'react';
import DashBoard from './components/pages/dashboard'
import Header from './components/utils/header';


function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserdata] = useState({});

  return (
    <div className="App">
        <Header />
      <Routes>
        <Route path="/" render={props => <LandingPage {...props}/>} element={<LandingPage />}/>
        <Route exact path="/login" 
          render={props => 
            !isAuthenticated ? (
              <Login {...props}/> 
            ) : (
            <Navigate to="/dashboard" {...props}/> 
            )
          }
          element={<Login />}
        />
        <Route path="/register" 
          render={props => 
            !isAuthenticated ? (
            <Register {...props}/>
            ) : (
              <Navigate to="/login"/> 
            )
          }
          element={<Register />}
        />
        <Route 
        path="/dashboard" 
        render={props => <DashBoard {...props}/>} 
        element={<DashBoard />}/>
        
      </Routes>
    </div>
  );
}

export default App;
