const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  getAllRestaurants,
  getRestaurantById,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
  getTopRestaurants
} = require('../controllers/restaurantController');
const { getMenuForRestaurant, addMenuItem } = require('../controllers/menuController');

// IMPORTANT: /top must be defined BEFORE /:id, or Express will treat "top" as an :id value
router.get('/top', getTopRestaurants);

router.get('/', getAllRestaurants);
router.get('/:id', getRestaurantById);
router.post('/', auth, createRestaurant);
router.put('/:id', auth, updateRestaurant);
router.delete('/:id', auth, deleteRestaurant);

router.get('/:id/menu', getMenuForRestaurant);
router.post('/:id/menu', auth, addMenuItem);

module.exports = router;
