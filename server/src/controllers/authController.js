const express = require("express");
let router = express.Router();
let User = require("../models/users.model");
let jwt=require("jsonwebtoken")
require("dotenv").config();


const generateToken=(user)=>{
return jwt.sign({user},process.env.KEY);
}

const Register =  async (req, res) => {
  try {
    const data = await User.findOne({ email: req.body.email });

    if (data) return res.status(400).send({ message: "User already exist" });
    const user = await User.create(req.body);
    return res.status(200).send({ user: user });
  } catch (e) {
    return res.status(404).send({ message: e.message });
  }
};

const Login = async (req, res) => {
  try {
    const data = await User.findOne({ email: req.body.email });

    if (!data)
      return res.status(400).send({ message: "Invalid username or password" });

    const Match = data.checkPassword(req.body.password);
    if (!Match)
      return res.status(400).send({ message: "Invalid username or password" });
    
      const Token=generateToken(data)
      return res.status(200).send({data, Token});


  } catch (e) {
    return res.status(404).send({ message: e.message });
  }
};

module.exports = {Register,Login };
