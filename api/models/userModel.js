var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var UserSchema = new Schema({
    username: {
        type: String,
        unique: [true, 'Username already exists.'], 
        required: [true, 'Username can not be blank.'],
        index: [true, 'Username can not be blank.']
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String, 
        lowercase: true, 
        unique: [true, 'Email already exists.'], 
        required: [true, 'Email can not be blank.'], 
        match: [/\S+@\S+\.\S+/, 'Email is invalid'], 
        index: [true, 'Email already exists.']
    }
});

UserSchema.pre('save', function (next) {
    var user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, null, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

UserSchema.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User', UserSchema);