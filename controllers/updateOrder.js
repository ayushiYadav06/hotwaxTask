const user = require('../models/createOrder');

exports.UpdateOrder = async(req ,res) =>{
    try {
        const {id} = req.params;
        const {
            orderName,
            currencyUomId,
            salesChannelEnumId,
            statusId,
            productStoreId,
            placedDate,
            approvedDate,
            grandTotal
          } = req.body;
     
          const updatedOrder = await user.findByIdAndUpdate(
           { _id:id} , 
            {orderName,
            currencyUomId,
            salesChannelEnumId,
            statusId,
            productStoreId,
            placedDate,
            approvedDate,
            grandTotal
           })

         console.log(updatedOrder)

         res.status(200).json({
            success:true,
            data:updatedOrder,
            message:"Order Updated Successfully"
         })

    } catch (error) {
        
        res.status(500).json({
            success:false,
            data:error,
            message:"Error while updating the order"
        })
    }
}