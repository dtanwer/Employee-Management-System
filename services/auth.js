const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userModel = require("../models/User.js");

exports.loginUserServices = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    

    if (!user)
     return res.status(400).json({ message: "User does not exist" });

    const isMatch = await bcrypt.compare(password,user.password);

    if (!isMatch)
      return res.status(400).json({ message: "Incorrect password" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res
      .cookie("access_token", token, { httpOnly: true, maxAge: 86400000 })
      .status(200)
      .json({
        message: "User logged in successfully",
        data: user,
      });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
