const mongoose = require('mongoose');

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
        score: {
			type: [
				{
					globalScore: Number,
                    tenSec: Number,
                    thirtySec: Number,
                    sixtySec: Number
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

