import { useState } from "react";


export default function NewUser() {

const [passCheck, setPassCheck] = useState(false);
const [verifyPassword, setVerifyPassword] = useState('');
const [inputs, setInputs] = useState({
    fname: "",
    lname: "",
    username: "",
    email: "",
    password: ""
})

const {fname, lname, username, email, password} = inputs;

const onChange = event => {
    setInputs({...inputs, [event.taget.name] : event.target.value})
}


console.log(fname);
console.log(password);

const  onSubmitForm = async(event) =>{
    event.preventDefault()

    try{

        const body = {fname, lname, username, email, password};
        const response = await fetch(
            "http://localhost:8080/users", {
            method: "POST",
            headers: {"content-type": "application/json"
            },
            body: JSON.stringify(body)
        });
        
        const parseRes = await response.json()
        delete parseRes.password;
        console.log(parseRes)

    } catch (err) {
        console.error(err.message)
    }
}


// const handleCreateAccount = async (event) => {
//     event.preventDefault()
    

//     if(password === verifyPassword){
//     await fetch(`http://localhost:8080/users`, {
//       method: "POST",
//       headers: {
//         "content-type": "application/json"
//       },
//       body: JSON.stringify(newUser)
//     })
//     .then(res => res.json())
//   }else{
//     setPassCheck(true)
//   } 
//   }

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
                    onChange={event => onChange(event)} >
                </input>
                <label htmlFor="lname" value="Lastname" />
                <input 
                    id="lname"  
                    value={lname}
                    type="text"
                    placeholder="Last Name"
                    onChange={event => onChange(event)} >
                </input>
                <label htmlFor="username" value="username" />
                <input
                    id="username"  
                    value={username}
                    type="text"
                    required
                    placeholder="User Name"
                    onChange={event => onChange(event)} >
                </input>
                <label htmlFor="email" value="email" />
                <input 
                    id="email"  
                    value={email}
                    type="email"
                    required
                    placeholder="Email Address"
                    onChange={event => onChange(event)} >
                </input>
                <label htmlFor="password" value="password" />
                <input 
                    id="password"  
                    value={password}
                    type="password"
                    placeholder="Password"
                    required
                    onChange={event => onChange(event)} >
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