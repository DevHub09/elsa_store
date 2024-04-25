import express from "express";
import {
  registerController,
  loginController,
  testController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddlewares.js";
import { forgotPasswwordController } from "../controllers/authController.js";
const router = express.Router(); //router object
//routing
//register || post method
router.post("/register", registerController);
//LOGIN || post
router.post("/login", loginController);
//forgrt pasword
router.post("/forgot-password", forgotPasswwordController);
//test route
router.get("/test", requireSignIn, isAdmin, testController);
//protected route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;

