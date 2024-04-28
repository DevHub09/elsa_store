import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";

import cors from "cors";
//config env (file for private keys of our project)
dotenv.config();
const port = process.env.port || 8080; //default is 8080
//database config
connectDB();
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
//routes
app.use("/api/v1/auth", authRoutes);


//listen
app.listen(port, () => {
  console.log(`the server is running on port ${port} `.bgMagenta.white);
});
