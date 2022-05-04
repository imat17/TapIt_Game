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
			type: [
				{
					globalScore: Number,
                    tenSec: Number,
                    thirtySec: Number,
                    sixtySec: Number,
                    multiplayer: [
                        {
                            wins: Number,
                            globalScore: Number,
                        }
                    ],
				},
			],
			required: true,
		},
    },
    {
    timestamps: true,
    }
);

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;

