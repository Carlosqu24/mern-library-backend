const usersControllers = {};

const User = require('../models/User');
const Role = require("../models/Role")

const jwt = require('jsonwebtoken')
const config = require('../config')

usersControllers.getUsers = async (req, res) => {
      // const users = new User.find();

};

usersControllers.createUser = async (req, res) => {
      const { username, email, password, roles } = req.body;

      const newUser = new User({
            username, 
            email,
            password: await User.encryptPassword(password)
      });

      if (roles) {
            const foundRoles = await Role.find({ name: { $in: roles } });
            newUser.roles = foundRoles.map(role => role._id)
      } else {    
            const role = await Role.findOne({ name: "user" });
            newUser.roles = [role._id]
      }

      const savedUser = await newUser.save();

      res.json(savedUser)
};


module.exports = usersControllers;