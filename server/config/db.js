import mongoose from 'mongoose';
import colors from 'colors'

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(
            `Connected to mongoDB ${conn.connection.host}`.bgMagenta.white
        );
    } catch (error) {
        console.log(`Failed to connect mongoDB ${error}`.bgRed.white);
    }
};

export default connectDB;