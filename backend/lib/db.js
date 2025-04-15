import mongoose, { mongo } from "mongoose"

export const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
    } catch (error) {
        
    }
}