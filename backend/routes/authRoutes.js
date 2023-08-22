import { Router } from "express";

const router = require("express").Router();

router.post("/", async (req, res) => {
    try{
        const { fname, lname, email, username, password } = req.body;
        const user = await knex("users");
        .where('id')
        .first();

    } catch(err) {
        console.error(err.message);
        res.status(500).send("server error")
    }
})

module.export = Router;