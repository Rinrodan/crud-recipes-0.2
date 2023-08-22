import { useState} from "react";
import Cookies from 'js-cookie'
import { Routes, Route, useNavigate} from 'react-router-dom'

export default function Login(isAuthenticated) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [authFail, setAuthFail] = useState(false);
    const Navigate = useNavigate();
    
    const handleLogin = (event) => {
        event.preventDefault();
        fetch('http://localhost:8080/login', {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            username: username,
            password: password
          })
        })
          .then(res => res.json()
          )
          .then(data => {
            if (data.token) {
              let inFifteenMinutes = new Date(new Date().getTime() + 15 * 60 * 1000);
              Cookies.set('token', data.token, {expires: inFifteenMinutes})
              Navigate(`/user/${data.username}`)
            } else {
              setAuthFail(true)
            }
          })
      }
    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label htmlFor="loginUsername" value="username" />
                <input
                    id="loginUsername"  
                    value={username}
                    type="text"
                    required
                    placeholder="User Name"
                    onChange={(event) => setUsername(event.target.value)} >
                </input>
                <label htmlFor="loginPassword" value="password" />
                <input 
                    id="loginPassword"  
                    value={password}
                    type="password"
                    placeholder="Password"
                    required
                    onChange={(event) => setPassword(event.target.value)} />
                <button 
                    type="submit" 
                    alt="submit create account">
                        Login
                </button>
            </form>
            </div>
    )
}