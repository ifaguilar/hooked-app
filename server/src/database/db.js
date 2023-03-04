import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.DB_CONNECTION_STRING);

    console.log("MongoDB connected");
  } catch (error) {
    console.error(`MongoDB connection error: ${error}`);
  }
};
