import express from "express"
import {} from "../controllers/authController.js";
const router = express.Router()//router object 
//routing
//register || post method 
router.post ('/register',registerController)




export default router
