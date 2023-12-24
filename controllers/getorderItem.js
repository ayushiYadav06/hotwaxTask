const user = require('../models/createOrder');


exports.getOrderItem = async(req,res) =>{
    try {

        const id = req.params.id;
        console.log(id)
        const {
            partName,
            facilityId,
            shipmentMethodEnumId,
            customerPartyId,
            itemDescription,
            quantity,
            unitAmount,
            // orderId , 
            // productId,
            // item_details
        } = req.body;

        const orderItem = await user.find({})

         
        res.status(200).json({
            success:true,
            data:orderItem,
            message:"Order Fetched by Id Successfully"
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            // data:error,
            message:"Error while fetching order"
        })
    }
}