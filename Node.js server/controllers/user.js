const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Enregistrement de nouveaux utilisateurs
exports.signup = (req, res, next) => {
	bcrypt
		.hash(req.body.password, 10)
		.then((hash) => {
			const user = new User({
				pseudo: req.body.pseudo,
				password: hash,
			});
			user
				.save()
				.then(() => res.status(201).json({ message: `L'utilisateur à bien été crée` }))
				.catch((error) => res.status(400).json({ error }));
		})
		.catch((error) => res.status(500).json({ error }));
};