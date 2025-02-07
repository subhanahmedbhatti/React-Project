const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Serve static images
app.use('/public', express.static(path.join(__dirname, 'public')));

// Use product routes
app.use('/api/products', productRoutes);

// Connect to MongoDB (Ensure MongoDB is running on 27017)
const mongoURI = 'mongodb://localhost:8000/site';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log(`Connected to database: ${mongoose.connection.db.databaseName}`);
});

// Start the server
const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
