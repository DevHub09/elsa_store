import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import Jwt from "jsonwebtoken";
export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    //validation
    if (!name) {
      return res.send({ message: "name is required" });
    }
    if (!email) {
      return res.send({ message: "email is required" });
    }
    if (!password) {
      return res.send({ message: "password is required" });
    }
    if (!phone) {
      return res.send({ message: "phone no. is required" });
    }
    if (!address) {
      return res.send({ message: "address is required" });
    }
    //checking for  user
    const existingUser = await userModel.findOne({ email });
    //checking for existing user
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "user already exist please login",
      });
    }
    //register user
    const hashedPassword = await hashPassword(password);
    //save it
    const user = await new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
    }).save();
    console.log({
      success: true,
      message: "user successfully  register",
      user,
    });
    res.status(201).send({
      success: true,
      message: "user successfully  register",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      //status code 500 is for internal server error
      success: false,
      message: "error in registration",
      error,
    });
  }
};
//POST LOGIN
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validtion
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "invalid email or password",
      });
    }
    //check user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "email is not registered",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "invalid password",
      });
    }
    //token
    const token = await Jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "login successfully",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error is login ",
      error,
    });
  }
};
//forget password
export const forgotPasswwordController = async (req,res) => {
try {
  const{email,answer,newPassword}= res.body
  if(!email){
    res.status(400).send({message:'email is required'})
  }
  if(!answer){
    res.status(400).send({message:'answer is required'})
  }
  if(!newPassword){
    res.status(400).send({message:'new password is required'})
  }
  //cheaking wmail or answer ko cheak kerna ha compare kerna ha 
  const user = await userModel.findOne({email,answer})
  //validation
  if (!user ){
    return res.status(404).send({
      success:false,
      message:'wrong email or answer'
    })
  }
  const hashed = await hashPassword(newPassword)
   await userModel.findByIdAndUpdate(user._id,{password: hashed});
   res.status(200).send({
    success:true,
    message:'password reset successfully'
   });
} catch (error) {
  console.log(error)
  res.send (500).send({
    success:false,message:'something went wrong',
    error
  })
}
};

//test controller
export const testController = (req, res) => {
  res.send("protected route");
};
