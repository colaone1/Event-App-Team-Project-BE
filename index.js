require('dotenv').config();
const connectDB = require('./config/db');

// Connect to MongoDB
connectDB()
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }); 