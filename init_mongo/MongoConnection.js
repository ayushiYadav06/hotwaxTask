const mongoose = require('mongoose')
require('dotenv').config()

const MongoConnection = () =>{
    mongoose.connect(process.env.DATABASE_URL).then(()=>{
        console.log("mongoDB Connection established successfully")
    }).catch((err)=>{
        console.log("Error while connecting with mongoDB")
        console.log(err);
    })
}

module.exports = MongoConnection();