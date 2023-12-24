const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    salutation:{
        type:String
    },
    firstName:{
        type:String,
        required:true
    },
    middleName:{
        type:String
    },
    lastName:{
        type:String,
        required:true
    },
    gender:{
        type:String
    },
    birth_date:{
        type:String
    },
    maritalStatus:{
        type:String
    },
    occupation:{
        type:String
    }
})

module.exports = mongoose.model('Person' , PersonSchema)