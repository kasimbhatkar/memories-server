import mongoose from "mongoose";

const connectDB = async () => {
  const CONNECTION_URL =
    "mongodb+srv://reactproject:reactproject123@cluster0.fye69pj.mongodb.net/memories";
  try {
    let connection = await mongoose 
      .connect(CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
     console.log(`MongoDB connected: ${connection.connection.host}`.bold.cyan.underline)
     return connection 
  } catch (error) {
    console.error(`Error: ${error.message}`.bold.red)
    process.exit(1)
  }
};

export default connectDB;

// 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