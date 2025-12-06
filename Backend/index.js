const express = require('express')
const connectDb = require('./src/Database/connect')
const router = require('./src/Router/Router');
const app = express()
const port = 5000;

connectDb();
app.use(express.json());
app.use(router)

app.listen(port, () => {
    console.log('server is running at:- ', port)
})





// app.post('/login', (req, res) => {
//     const { name, password } = req.body
//     console.log(req.body)

//     res.json({
//         message: 'API is working',
//     })
// })










