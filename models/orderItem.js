const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema ({
         orderId:{
            // type:mongoose.Schema.Types.ObjectId,
            // ref:'CreateOrder',
            // default:true
         },
        orderIdSeqId:{
            type:String
        },
        itemDescription:{
            type:String
        },
        unitAmount:{
            type:String
        },
        itemTypeEnumId:{
            type:String
        },
        parentItemSeqId:{
            type:String
        },
        
        item_details:[
            // {
            //     productId:{
            //         type:mongoose.Schema.Types.ObjectId,
            //         ref:'product'
            //     }
            // }
        ]
})

module.exports = mongoose.model('orderItem' , orderItemSchema)