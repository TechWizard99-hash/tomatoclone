import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      'mongodb+srv://pkhodade13:prasad123@cluster0.ulg8n.mongodb.net/FoodDel?retryWrites=true&w=majority'
    );

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Stop the server if DB connection fails
  }
};
