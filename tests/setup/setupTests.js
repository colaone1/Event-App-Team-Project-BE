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
  // Ensure we're using the test database
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGODB_URI_TEST, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  }
});

afterAll(async () => {
  // Close MongoDB connection
  if (mongoose.connection.readyState !== 0) {
    await mongoose.connection.close();
  }
});

// Add any global test utilities here
global.testUtils = {
  // Add your test utilities here
}; 