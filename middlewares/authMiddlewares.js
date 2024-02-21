import  Jwt  from "jsonwebtoken";
//protected routes token base 
export const requireSignIn = async(req,res,next)=>{
try {
    //VERIFY FOR COMPARE TOCKEN
    //tokens headers may hota ha 
    const decode = JWT.verify(req.headers.authorization,process.env.JWT_SECRET)
    next();
} catch (error) {
    console.log(error)

}
} 