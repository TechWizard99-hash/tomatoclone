import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    // Use MONGO_URI from .env; if you get querySrv ENOTFOUND, use the
    // "Standard connection string" from MongoDB Atlas instead of "SRV".
    const uri =
      process.env.MONGO_URI ||
      "mongodb+srv://Prasad13:9158761706@cluster0.uxhhggq.mongodb.net/food-del?retryWrites=true&w=majority";

    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 10000,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    console.error(
      "If you see ENOTFOUND: use the Standard connection string from MongoDB Atlas (Connect → Drivers → Node.js) and set MONGO_URI in .env"
    );
    process.exit(1);
  }
};
