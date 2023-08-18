import { useState } from "react";


export default function NewUser() {

const [passCheck, setPassCheck] = useState(false);
const [verifyPassword, setVerifyPassword] = useState('');
const [fname, setFname] = useState('');
const [lname, setLname] = useState('');
const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

console.log(fname);
console.log(password);
console.log(passCheck);



// const passwordChecker = () => password === verifyPassword ? setPassCheck(true) : null;

const  onSubmitForm = async(event) =>{
    event.preventDefault()
        try{
            const newUser = {fname, lname, username, email, password};
            if(password === verifyPassword){
                await fetch(`http://localhost:8080/users`, {
                  method: "POST",
                  headers: {
                    "content-type": "application/json"
                  },
                  body: JSON.stringify(newUser)
                })
                .then(res => res.json())
                
    
                console.log(passCheck);
                alert("Registration Successful!!!!")
            } else{
                alert("passwords must match")
                setPassCheck = true;
                console.log(passCheck);
            }
        }catch (err) {
            console.error(err.message)
        }
}

return (
    <div>
         {passCheck && <p className="text-center text-red-500">Passwords Must Match</p>}
            <form onSubmit={onSubmitForm}>
                <label htmlFor="fname" value="fname" />
                <input 
                    id="fname"  
                    value={fname}
                    type="text"
                    placeholder="First Name"
                    onChange={(event) => setFname(event.target.value)} >
                </input>
                <label htmlFor="lname" value="Lastname" />
                <input 
                    id="lname"  
                    value={lname}
                    type="text"
                    placeholder="Last Name"
                    onChange={(event) => setLname(event.target.value)} >
                </input>
                <label htmlFor="username" value="username" />
                <input
                    id="username"  
                    value={username}
                    type="text"
                    required
                    placeholder="User Name"
                    onChange={(event) => setUsername(event.target.value)} >
                </input>
                <label htmlFor="email" value="email" />
                <input 
                    id="email"  
                    value={email}
                    type="email"
                    required
                    placeholder="Email Address"
                    onChange={(event) => setEmail(event.target.value)}>
                </input>
                <label htmlFor="password" value="password" />
                <input 
                    id="password"  
                    value={password}
                    type="password"
                    placeholder="Password"
                    required
                    onChange={(event) => setPassword(event.target.value)}>
                </input>
                
                <label htmlFor="checkpass" value="Verify Password" />
                <input
                    id="checkpass"
                    value={verifyPassword}
                    onChange={(event) => setVerifyPassword(event.target.value)}
                    placeholder="Verify Password"
                    type="password"
                    alt="second password input"
                    required
                />
                <button 
                    type="submit" 
                    alt="submit create account">
                        Submit
                    </button>
            </form>
        </div>

    )
}