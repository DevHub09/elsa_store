import Jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";
//protected routes token base
export const requireSignIn = async (req, res, next) => {
  try {
    const decode = Jwt.verify(
      //in dono ko compare karay ga phir decode ker dega 
      //,value match ho ya na ho
      req.headers.authorization, //header se token get hain hum
      process.env.JWT_SECRET
    );
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
  }
};
//Admin access
export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "Unauthorized Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "error in adminn  middleware",
    });
  }
};
