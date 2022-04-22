const express = require('express');
const cors = require('cors');
const path = require('path');
const userRoutes = require('./routes/user');

const app = express();

app.use(express.json());

// Autorisations cors 
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
	);
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
	next();
});

app.use(cors());

// Routes

app.use('/api/user', userRoutes)

module.exports = app;