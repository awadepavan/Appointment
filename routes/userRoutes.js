
const express = require('express');
const router = express.Router();
const { getUsers, addUser, deleteUser } = require('../controllers/userController');

router.get('/users', getUsers);
router.post('/users', addUser);
router.delete('/users/:id', deleteUser);

module.exports = router;
