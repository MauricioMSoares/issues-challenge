import mongoose, { mongo } from "mongoose";

const connectDB = async () => {
  mongoose.connect(process.env.DB_STRING);

  return mongoose.connection;
};

export default connectDB;
