require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const logger = require('./middleware/logger');

const authRoutes = require('./routes/authRoutes');
const restaurantRoutes = require('./routes/restaurantRoutes');
const menuRoutes = require('./routes/menuRoutes');

const app = express();

connectDB();

app.use(express.json());
app.use(logger);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to Restaurant APIs' });
});

app.use('/', authRoutes);           // /register, /login
app.use('/restaurants', restaurantRoutes);
app.use('/menu', menuRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
