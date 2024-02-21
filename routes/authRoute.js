import express from "express"
import {registerController,loginController,testController} from "../controllers/authController.js";
import { requireSignIn } from "../middlewares/authMiddlewares.js";
const router = express.Router()//router object 
//routing
//register || post method 
router.post ('/register',registerController)
//LOGIN || post 
router.post('/login',loginController)
//test route
router.get('/test',requireSignIn, testController)


export default router
