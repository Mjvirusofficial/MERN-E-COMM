const express = require('express');
const router = express.Router();
const controller = require('../Controller/controller');

// POST user
router.post('/LoginUser', controller.createUser);

// GET all users
router.get('/LoginUser', controller.getAllUsers);

// 🔥 Delete (super short)
router.delete('/LoginUser/:id', controller.deleteUser);

// Update
router.put('/LoginUser/:id', controller.updateUser);

module.exports = router;
