// Global test setup
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

// Load .env.test if it exists
const envTestPath = path.resolve(process.cwd(), '.env.test');
if (fs.existsSync(envTestPath)) {
  require('dotenv').config({ path: envTestPath });
}

process.env.NODE_ENV = 'test';

// Add any global test setup here
beforeAll(async () => {
  try {
    // Ensure we're using the test database
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_URI_TEST, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000 // 5 second timeout
      });
    }
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
});

afterAll(async () => {
  try {
    // Close MongoDB connection with timeout
    if (mongoose.connection.readyState !== 0) {
      await Promise.race([
        mongoose.connection.close(),
        new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Database close timeout')), 5000)
        )
      ]);
    }
  } catch (error) {
    console.error('Error closing database connection:', error);
  }
});

// Add any global test utilities here
global.testUtils = {
  // Add your test utilities here
}; 