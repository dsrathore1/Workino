import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(
      process.env.URI,
      {
        dbName: "Workino-Customers",
      },
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`Your DB is connected ${connection.name}`);
  } catch (error) {
    if (error) throw error;
  }
};

export default connectDB;
