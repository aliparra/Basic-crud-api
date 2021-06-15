const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller')

//ROUTES

router.post('/user', usersController.create)
router.get('/users', usersController.getAll)
router.get('/user/:id', usersController.getUser)
router.put('/user', usersController.update)
router.delete('/user', usersController.delete)



module.exports = router;