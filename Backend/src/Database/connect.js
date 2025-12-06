const express = require('express')
const mongose = require('mongoose')

const app = express();
app.use(express.json());

const connectDb = async () =>{
    try {
        await mongose.connect('mongodb://localhost:27017/ECom')
        console.log('Database connectd sucessfully')
    } catch (e) {
        console.log(e)
    }
}

module.exports = connectDb;