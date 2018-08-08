// This required are for signin and signup
var mongoose = require('mongoose');
var passport = require('passport');
var config = require('../../config/database');
require('../../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken'); 
var User = require('../models/userModel');

exports.test = function(req, res) {
    res.json("working... OKIIIII");
};

exports.august = function(req, res) {
	res.send("August");
}

exports.signup = function(req, res) {
	  if (!req.body.email || !req.body.username || !req.body.password) {
	    res.json({success: false, msg: 'Please pass email, username and password.'});
	  } else {
	    var newUser = new User({
	      username: req.body.username,
	      password: req.body.password, 
	      email: req.body.email
	    });
	    // save the user
	    newUser.save(function(err) {
	      if (err) {
	        return res.json({success: false, msg: err.message});
	      }
	      res.json({success: true, msg: 'Successful created new user.'});
	    });
	  }
}

exports.signin = function(req, res) {
	User.findOne({
	    username: req.body.username
	  }, function(err, user) {
	    if (err) throw err;
	    if (!user) {
	      res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
	    } else {
	      // check if password matches
	      user.comparePassword(req.body.password, function (err, isMatch) { 
	        if (isMatch && !err) {
	          // if user is found and password is right create a token
	          var token = jwt.sign(JSON.stringify(user), config.secret);
	          // return the information including token as JSON
	          res.json({success: true, token: 'JWT ' + token});
	        } else {
	          res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
	        }
	      });
	    }
	  });
}