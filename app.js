require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const { connectDB } = require('./src/infrastructure/repositories/database/mongo/config');
const app = express();

// Connect to Database
connectDB();

// Middlewares
app.use(morgan('dev')); 
app.use(express.json()); 

// Routes
const productRoutes = require('./src/presentation/routes/product.routes');
const orderRoutes = require('./src/presentation/routes/order.routes');

app.use('/api/v1/orders', orderRoutes);
app.use('/api/v1/products', productRoutes);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Servidor en: http://localhost:${PORT}/api/v1/products 🌐`));
