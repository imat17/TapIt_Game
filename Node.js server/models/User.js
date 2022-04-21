const mongoose = require('mongoose');

const user =  mongoose.Schema({
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
            max: 1024,
            minlength: 6,
        },
    },
{
    timestamps: true,
});

// Crypt
user.pre('save', async function (next) {
	const salt = await bcrypt.genSalt();
	this.password = await bcrypt.hash(this.password, salt);
	next();
});

// Uncrypt
user.statics.login = async function (pseudo, password) {
	const user = await this.findOne({ pseudo });
	if (user) {
		const auth = await bcrypt.compare(password, user.password);
		if (auth) {
			return user;
		}
		throw Error('Mot de passe incorrect');
	}
	throw Error('Email incorrect');
};

const UserModel = mongoose.model('user', user);

module.exports = UserModel;