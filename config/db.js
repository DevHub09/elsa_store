import mongoose from "mongoose";
import colors from "colors";
const connectDB = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`connected to mongodb ${conn.connection.host}`.bgCyan.bgMagenta);
    } catch (error) {
        console.log(`error in mongoose ${error}`.bgRed.white);
    }
}
export default connectDB;