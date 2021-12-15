const express = require('express');
const router = express.Router();

const usersControllers = require('../controllers/users.controllers');
const { verifyToken, isModerator, isAdmin, checkRolesExisted } = require("../middlewares/index")

router.get('/', usersControllers.getUsers);
router.post('/new-user', [verifyToken, isAdmin, checkRolesExisted], usersControllers.createUser);

module.exports = router;