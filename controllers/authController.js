import userModel from "../models/userModel.js";
import { hashPassword } from "../helpers/authHelper";
export const registerController = async (req,res) =>{
try {
    const {name,email,password, phone,address}=req.body
    //validation
    if (!name){
        return res.send ({error:'name is required'})
    }
    if (!email){
        return res.send ({error:'email is required'})
    }
    if (!password){
        return res.send ({error:'password is required'})
    }
    if (!phone){
        return res.send ({error:'phone no. is required'})
    }
    if (!address){
        return res.send ({error:'address is required'})
    }
    //checking for  user
    const existingUser = await userModel.findOne({email});
    //checking for existing user 
    if(existingUser){
        return res.status(200).send({
            success:true,message:'user already exist please login'
        })
    }
    //register user
    const hashedPassword=  await hashedPassword(password)
    //save it 
    const user = new userModel({name,email,phone,address,password:hashedPassword}).save
    res.status(201).send({
        success : true,
        message:'user successfully  register',
        user
    })

} catch (error) {
    console.log(error);
    res.status(500).send({//status code 500 is for internal server error
        success : false ,
        message: 'error in registration',
        error
    })
}
};




