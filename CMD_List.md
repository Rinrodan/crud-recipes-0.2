## EXPRESS SETUP
```javascript
cd backend

npm i pg knex cors react-router-dom

touch server.js
 const express = require('express')
 const cors = require('cors')
 const knex = require('./db/dbConnection.js')
 const app = express()
 const port = 8080;

app.get('/',(req, res) => {
res.send(`
<div style="background-color: pink; height: 100%;">
<h1>Express server is running on ${port}</h1>
</div>
`)
})

 
nodemon server.js
 - should display end point and return message
```

after server is active...
## POSTGRES
```javascript
sudo apt install postgresql postgresql-contrib

sudo systemctl start postgresql.service

sudo -i -u postgres

psql

createdb recipesdb;

\c recipesdb
 
```

after postgres db is active...
## Knex
```
npx knex init
 - knexfile created
  development: {
    client: 'pg',
    connection: {
    host: 'localhost',
    port: '5432',
    database: 'recipesdb',
    username: 'postgres',
    password: 'password'
    }
  },

mkdir db

cd db

touch ./db/dbConnections.js
 - const knex = require("knex")(
 - require("../knexfile.js")[process.env.NODE_ENV || "development"]
 - );
 -  module.exports = knex;

npx knex migrate:make users

postgres=# \list

postgres=# \c recipesdb

postgres=# \dt

postgres=# \TABLE users
 - should show an empty table


server.js
 - add '/users' endpoint

knex migrate:latest
 - 8080/users should show failed message instead of err

npx knex seed:make users
 - fname, lname, username, email, password

npx knex seed:run
 - '8080/users' should show json user data



```