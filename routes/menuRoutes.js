const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { updateMenuItem, deleteMenuItem } = require('../controllers/menuController');

router.put('/:id', auth, updateMenuItem);
router.delete('/:id', auth, deleteMenuItem);

module.exports = router;
