import express from "express";
import colors from "colors";
import dotenv from "dotenv";
//config env (file for private keys of our project)
dotenv.config();
const port = process.env.port||8080;//default is 8080
const app = express();
//rest API
app.get("/",(req,res)=>{
    res.send({
        message:"welcome to ecommer app",
    });
});
//listen 
app.listen(port,()=>{
    console.log(`the server is running on port ${port} `.bgMagenta.white);

})



