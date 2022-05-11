const mongoose = require('mongoose');
const { isEmail } = require('validator');

const userSchema =  mongoose.Schema({
        pseudo: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 40,
            unique: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            maxlength: 1024,
            minlength: 6,
        },
        email: {
            type: String,
            required: true,
            validate: [isEmail],
            lowercase: true,
            unique: true,
            trim: true,
        },
        score: {
			globalScore: {
                type: Number,
                default: 0,
                required: true,
            },
			tenSec: {
                type: Number,
                default: 0,
                required: true,
            },
			thirtySec: {
                type: Number,
                default: 0,
                required: true,
            },
			sixtySec: {
                type: Number,
                default: 0,
                required: true,
            },
            multiplayer: {
                victories: {
                    type: Number,
                    default: 0,
                    required: true,
                }
            },
		},
    },
    {
    timestamps: true,
    }
);

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;

