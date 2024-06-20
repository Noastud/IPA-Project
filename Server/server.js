const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const businessesRoute = require('./routes/businesses');
require('dotenv').config();  // Ensure this is at the top to load .env variables

const app = express();
const port = process.env.PORT || 5000;

const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB', err);
});

app.use(cors());
app.use(express.json());
app.use('/api/businesses', businessesRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
