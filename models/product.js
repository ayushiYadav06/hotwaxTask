const mongoose = require('mongoose');

const product = new mongoose.Schema ({      
        ownerPartyId:{
            type:String
        },
        productName:{
            type:String
        },
        description:{
            type:String
        },
        chargeShipping:{
            type:String
        },
        returnable:{
            type:String
        }
})

module.exports = mongoose.model('product' , product)