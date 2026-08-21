const Restaurant = require('../models/Restaurant');

exports.getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.status(200).json(restaurants);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.getRestaurantById = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }
    res.status(200).json(restaurant);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.createRestaurant = async (req, res) => {
  try {
    const { name, city, address, cuisine, rating } = req.body;
    if (!name || !city || !address || !cuisine || rating === undefined) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const restaurant = await Restaurant.create({ name, city, address, cuisine, rating });
    res.status(201).json(restaurant);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.updateRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }
    res.status(200).json(restaurant);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.deleteRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.findByIdAndDelete(req.params.id);
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }
    res.status(200).json({ message: 'Restaurant deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Extra task: top 5 restaurants by rating
exports.getTopRestaurants = async (req, res) => {
  try {
    const topRestaurants = await Restaurant.find().sort({ rating: -1 }).limit(5);
    res.status(200).json(topRestaurants);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
