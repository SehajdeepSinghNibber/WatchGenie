import mongoose from 'mongoose';
import config from '../config/config.js';

dotenv.config()

const connectDB = async ()=> {
    try {
        await mongoose.connect(`${config.MONGO_URI}/watchgenie`)
        console.log(`db connected`)
    } catch (error) {
        console.log(`db not connexted`);
        console.log(error)
        process.exit(1);
    }
}

export default connectDB;