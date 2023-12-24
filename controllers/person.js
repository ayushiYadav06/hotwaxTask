const user = require("../models/person");

exports.User = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      middleName,
      gender,
      occuption,
      salutation,
      birth_date,
      maritalStatus,
    } = req.body;

    const response = await user.create({
      firstName,
      lastName,
      middleName,
      gender,
      occuption,
      salutation,
      birth_date,
      maritalStatus,
    });

    res.status(200).json({
        success:true,
        data:response,
        message:"User Created Successfully"
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      data: "Internal Server Error",
      message: "Error while creating a user",
    });
  }
};
