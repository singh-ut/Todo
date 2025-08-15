import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(
        // eslint-disable-next-line no-undef
            process.env.MONGO_URI
        );
        console.log(`DB Connected on: ${conn.connection.host}`);
    }
    catch (error) {
        console.log(`DB Connection Error: ${error}`);
    }
}

export default connectDB;