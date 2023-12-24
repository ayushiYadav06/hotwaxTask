const mongoose = require('mongoose');

const createOrderSchema = new mongoose.Schema ({
      orderName:{
        type:String,
        required:true
      },
      currencyUomId:{
        type:String,
        default:"USD"
      },
      salesChannelEnumId:{
        type:String
      },
     statusId:{
        type:String,
        default:"OrderPlaced"
     },
     productStoreId:{
        type:String
     },
     placedDate:{
        type:Date,
        default:Date.now(),
        required:true
     },
     approvedDate:{
        type:Date,
        default:Date.now()
     },
     grandTotal:{
        type:String
     }
})

module.exports = mongoose.model('CreateOrder' , createOrderSchema)