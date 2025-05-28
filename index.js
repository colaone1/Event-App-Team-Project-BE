// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// TODO: If you decide to hash passwords in the future, uncomment and configure bcrypt
// const bcrypt = require('bcrypt');
// TODO: If you decide to use JWT authentication, uncomment and configure jsonwebtoken
// const jwt = require('jsonwebtoken');

const authRoutes = require('./routes/authRoutes');
const eventRoutes = require('./routes/eventRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
// TODO: Replace the fallback URI with your actual MongoDB connection string when ready
const MONGODB_URI = process.env.MONGODB_URI || 'YOUR_MONGODB_URI_HERE';

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // TODO: Add any additional mongoose options if needed
  })
  .then(() => console.log('✔️  MongoDB connected!'))
  .catch(err => console.error('❌  MongoDB connection error:', err));

// Mount routes
// All /auth routes (e.g. login, register) are defined in routes/authRoutes.js
app.use('/auth', authRoutes);
// All /events routes (CRUD operations) are defined in routes/eventRoutes.js
app.use('/events', eventRoutes);

// Health check endpoint
app.get('/', (req, res) => {
  res.send('🎉 Event API is up and running!');
});

// Start server
// TODO: Confirm if you want to use a different env variable for the port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀  Server listening on port ${PORT}`);
});
