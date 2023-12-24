const mongoose = require('mongoose');

const orderPartSchema = new mongoose.Schema ({
         orderId:{
            // type:mongoose.Schema.Types.ObjectId,
            // ref:'CreateOrder'
         },
         orderPartSeqId:{
            type:String
         },
         partName:{
            type:String
         },
         statusId:{
            type:String
         },
         vendorPartyId:{
            type:String
         },
         customerPartyId:{
            type:String
         },
         partTotal:{
            type:String
         },
         facilityId:{
            type:String
         },
         shipmentMethodEnumId:{
            type:String
         }
})

module.exports = mongoose.model('orderPart' , orderPartSchema)