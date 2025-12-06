const express = require('express');
const mongoose = require('mongoose');
const app = express();

// body read karne ke liye
app.use(express.json());

// 2️⃣ Ek simple schema bnao (database ka design)
const userSchema = new mongoose.Schema({
    name:String,
    password:String,
})

// 3️⃣ Schema ko model me convert karo (table ki tarah)
const user = mongoose.model('user',userSchema);

module.exports = user;

