const mongoose = require('mongoose');
const Product = require('../models/Product');

// Replace with your MongoDB connection string
const mongoURI = 'mongodb://localhost:27017/site';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log(`Connected to database: ${mongoose.connection.db.databaseName}`);
});

const products = [
  { name: 'Bag', price: 10, image: '/https://splash30.com/cdn/shop/files/68D5EEA2-E525-49B2-8A09-8411FBCD32D0_720x.png?v=1737460568' },
  { name: 'Product 2', price: 20, image: '/imgs/image2.jpg' },
  { name: 'Product 3', price: 30, image: '/imgs/image3.jpg' },
  { name: 'Product 4', price: 40, image: '/imgs/image4.jpg' },
  { name: 'Product 5', price: 50, image: '/imgs/image5.jpg' },
  { name: 'Product 6', price: 60, image: '/imgs/image6.jpg' },
];

const addProducts = async () => {
  try {
    await Product.insertMany(products);
    console.log('Products added successfully');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error adding products:', error);
    mongoose.connection.close();
  }
};

addProducts();