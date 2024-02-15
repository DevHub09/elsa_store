import bcrypt from "bcrypt";//bcrypt hides the password
export const hashPassword = async (password)=>{
try {
    const saltRounds = 10 ;
    const hashedPassword = await bcrypt.hash(password,saltRounds);
    return hashedPassword;
} catch (error) {
    console.log(error);
}
};
//for comparing the hashed password and the password
export const comparePassword = async(password,hashedPassword) =>{
    return bcrypt.compare(password,hashedPassword);
}