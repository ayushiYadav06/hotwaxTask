const orderPartSchema = require('../models/orderPart')
const orderItemSchema = require('../models/orderItem')

exports.AddOrderItem = async(req,res) =>{
       try {
        const {
            partName,
           facilityId,
           shipmentMethodEnumId,
           customerPartyId,
           itemDescription,
           quantity,
           unitAmount,
           orderId , 
           productId,
           item_details
       }  = req.body;
      
       const orderPart = await orderPartSchema.create({
           orderId:orderId , partName , facilityId , shipmentMethodEnumId , customerPartyId
       })
      const orderItems = await orderItemSchema.create(items_details.map(item =>({
        productId:productId,
        itemDescription,
        quantity,
        unitAmount
      })))

       res.status(200).json({
        success:true, 
        data: orderPart  , item_details , 
        message:"Order Item added Successfully"
       })

       } catch (error) {
         res.status(500).json({
            success:false,
            data:error,
            message:"Error while fetching order"
        })
       }      
}