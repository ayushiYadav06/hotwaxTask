const user = require("../models/createOrder");

exports.CreateOrder = async (req, res) => {
  try {
    const {
      orderName,
      currencyUomId,
      salesChannelEnumId,
      statusId,
      productStoreId,
      placedDate,
      approvedDate,
    } = req.body;

    const response = await user.create({
      orderName,
      currencyUomId,
      salesChannelEnumId,
      statusId,
      productStoreId,
      placedDate,
      approvedDate,
    });

    res.status(200).json({
        success:true,
        data:response,
        messsage:"Order Created successfully"
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error while creating a order",
      data: error,
    });
  }
};
