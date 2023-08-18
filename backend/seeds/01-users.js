const bcrypt = require('bcryptjs')

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    { fname: 'Jim',
      lname: 'Johnson',
      email: 'jj@gmail.com',
      username: 'jj',
      password: bcrypt.hashSync('password', 1)
    },
    { fname: 'bill',
      lname: 'Johnson',
      email: 'bj@gmail.com',
      username: 'bj',
      password: bcrypt.hashSync('pwd', 1)
    },
    { fname: 'Tim',
      lname: 'Thompson',
      email: 'tt@gmail.com',
      username: 'tdog',
      password: bcrypt.hashSync('pwd', 1)
    }
])}