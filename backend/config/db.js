const mongoose = require("mongoose");

const connectDB = async () => {
  if (!process.env.MONGO_URL) {
    console.error("MONGO_URL not defined in environment variables!");
    process.exit(1);
  }

  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("✅ Database connected successfully");
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
