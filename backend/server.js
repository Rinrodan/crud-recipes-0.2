
const express = require('express')
const cors = require('cors')
const knex = require('./db/dbConnection.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const app = express()
const port = 8080;

app.use(express.json())
app.use(cors())
// app.use("/authentication", require("./routes/jwtAuth"));
// app.use("/dashboard", require("./routes/dashboard"));

// const JWT_SECRET = "secretSECRETsecret"

// function authenticateToken(req, res, next) {
//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.split(' ')[1];
//   if (token == null) return res.sendStatus(401);

//   jwt.verify(token, JWT_SECRET, (err, user) => {
//     if (err) return res.sendStatus(403);
//     req.user = user;
//     next();
//   });
// }


app.get('/',(req, res) => {
  res.send(`
  <div style="background-color: pink; height: 100%;">
  <h1>Express server is running on ${port}</h1>
  </div>
`)
})

app.get('/users', async (req, res) => {
  try {
    const users = await knex('users')
    .select("*");

  res.status(201).json(users);
} catch (err) {
  res.status(500).json({ message: "Failed to retrieve users." });
}
});

app.post('/users', async (req, res) => {
  const { fname, lname, email, username, password } = req.body;
  console.log(req.body)
  const newUser = {
    fname: fname,
    lname: lname,
    email: email,
    username: username,
    password: bcrypt.hashSync(password, 10)
    
  }

  try {
    
    const addedUserResponse = await knex('users')
      .insert(newUser)
      .returning('*')

    console.log('user response: ', addedUserResponse)


    addedUserResponse = addedUserResponse.map((e) => {
      delete e.password
    })
    res.status(201).json(addedUserResponse)
  } catch (err) {
    res.status(500).json(err.message)
  }

})


app.post('/login', async (req, res) => {
  const { username, password } = req.body

  let userCheck = await knex('users')
        .select('id', 'username', 'password')
        .where('username', username)
        .first()
  
  if (userCheck) {
    //validate the password using bcrypt
    let submittedPass = req.body.password; //plain text from browser
    let savedPass = userCheck.password; //that has been hashed
    //TODO: use bcrypt.compare() to actually hash and compare the password
    const passwordDidMatch = await bcrypt.compare(password, userCheck.password);
   
    if (passwordDidMatch) {
      let userData = await knex('users')
        .select("*")
        .where('username', username)
        .first()
        delete(password)
      res.status(200).send({data: {userData} || { token: 'this is a pretend token' } });
      console.log(userData)
    } else {
      res.status(401).send({
        error: { code: 401, message: 'invalid username or password.' },
      });
    }
  } else {
    //cause a delay to hide the fact that there was no match
    let fakePass = `$2b$$$invalidusernameaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`;
    await bcrypt.compare(password, fakePass);
    //to slow down the process
    res
      .status(401)
      .send({ error: { code: 401, message: 'invalid username or password.' } });
  }
});

// app.post('/login', async (req, res) => {
//   const { username, password } = req.body
//   console.log(`User '${username}' is attempting to login`)

//   try {
//     const user = await knex('users')
//       .select('id', 'username', 'password')
//       .where('username', username)
//       .first()

//     if (user) {
//       const isPasswordValid = bcrypt.compareSync(password, user.password);
//       console.log('bcrypt:', isPasswordValid)

//       if (isPasswordValid) {
//         console.log(`User '${username}' has successfully logged in`)

//       //   const token = jwt.sign({ user: user.user_name }, JWT_SECRET, { expiresIn: '1h' })
//       //   const user_name = user.user_name
//       //   res.status(201).json({ token, user_name })
//       // } 
//         const username = user.username
//         res.status(201).json({ username })
//       } else {
//         console.log(`User '${username}' failed authentication`)
//         res.status(401).json({ message: "Failed to authenticate." })
//       }
//     } else {
//       console.log('User does not exist')
//       res.status(401).json({ message: "Failed to authenticate" })
//     }
//   } catch (err) {
//     console.log(`Fetch request failed.  Invalid user input`)
//     res.status(500).json({ message: "Failed Request" })
//   }
// })


app.listen(port, () => {
  console.log(`Example app listening on port <<< ${port} >>>`)
})