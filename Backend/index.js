const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const user = require("./Models/Sample")

app.use(express.json());
app.use(express.urlencoded({extended: true}))

dotenv.config();

app.get("/", (req, res)=>{
    res.send(process.env.MONGO_URL)
})

app.get("/Response", (req, res)=>{
    res.send("Put somethig after the response in thr URL U Dumb!!");
})

app.get("/Response/:id", (req, res)=>{
    const resp = req.params.id.toString();
    res.send(resp.toLowerCase());
})

app.get("/randUser/Add", (req, res)=>{
    const name = "name";
    const age = 100;
    const data = {
        name, age
    }
    const userData = new user(data);
    userData.save();
    res.send("A Random User is been added!!")
})

app.get("/users", async (req, res)=>{
    const data = await user.find();
    res.send(data)
})

app.get("/users/length", async (req, res)=>{
    const data = await user.find();
    res.send(data.length)
})

app.listen(60000);