const bcrypt = require('bcrypt');
const UserModel = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: '/.env' });

// SignUp
exports.signUp =  (req, res) => {
	bcrypt
		.hash(req.body.password, 10)
		.then((hash) => {
			const user = new UserModel({
				pseudo: req.body.pseudo,
				password: hash,
			});
			user
				.save()
				.then(() => res.status(201).json({ message: `The user has been successfully created` }))
				.catch((error) => res.status(400).json({ error }));
		})
		.catch((error) => res.status(500).json({ error }));
};

// Connect
exports.login = (req, res) => {
	UserModel.findOne({ pseudo: req.body.pseudo })
		.then((user) => {
			if (!user) {
				return res.status(401).json({ error: 'User not found' });
			} else {
				bcrypt
					.compare(req.body.password, user.password)
					.then((valid) => {
						if (!valid) {
							return res.status(401).json({ error: 'Wrong password' });
						}
						res.status(200).json({
							userId: user._id,
							token: jwt.sign({ userId: user._id }, process.env.JWT, {
								expiresIn: '365d',
							}),
						});
					})
					.catch((error) => res.status(500).json({ error }));
			}
		})
		.catch((error) => res.status(500).json({ error }));
};

// module.exports.logout = (req, res) => {
// 	res.cookie('jwt', '', { maxAge: 1 }); // maxAge = 1ms
// 	res.redirect('/');
// };