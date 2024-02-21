import express from "express"
import {registerController,loginController} from "../controllers/authController.js";
const router = express.Router()//router object 
//routing
//register || post method 
router.post ('/register',registerController)
//LOGIN || post 
router.post('/login',loginController)



export default router
