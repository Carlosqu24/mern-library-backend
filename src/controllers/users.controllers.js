const usersControllers = {};

const User = require('../models/User');
const Role = require("../models/Role")

const jwt = require('jsonwebtoken')
const config = require('../config')

usersControllers.getUsers = async (req, res) => {
      // const users = new User.find();

};

usersControllers.createUser = async (req, res) => {
      // const { username, email, password, roles } = req.body;

      // const user = new User({ username, email, password, roles })

      res.json("creating user")
};


module.exports = usersControllers;