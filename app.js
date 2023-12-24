const express = require('express');
require('dotenv').config()
require('./init_mongo/MongoConnection')

const router = require('./routes/route')

const app = express();
app.use(express.json())
app.use('/api/v1' , router);
app.listen(process.env.PORT, () =>{
    console.log(`Server connected on PORT : ${process.env.PORT}`)
})