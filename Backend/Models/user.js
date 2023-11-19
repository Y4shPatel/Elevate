const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require("dotenv").config();

const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'please provide your name'],
        minlength: 3,
        maxlength: 50,
    },

    email: {
        type: String,
        required: [true, 'please provide your email'],
        unique: true,
        lowercase: true,
        index : true

    }, 

    password: {
        type: String,
        required: [true, 'please provide your password'],
        minlength: 6,
       
    },

    date: {
        type : Date,
        default: Date.now
      }
    


})

module.exports = mongoose.model('user',UserSchema)
