const user = require('../models/createOrder');
const { findById } = require('../models/person');

exports.getOrder = async(req,res) =>{
    try {

        const id = req.params.id;
        console.log(id)
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

        const TodoById = await user.findById({_id:id})

         console.log(TodoById)
        res.status(200).json({
            success:true,
            data:TodoById,
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