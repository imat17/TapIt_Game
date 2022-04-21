const mongoose = require('mongoose');
require('dotenv').config({ path: '/.env' });

mongoose
	.connect('mongodb+srv://' + process.env.DB_LOGIN + '@tapgamedata.cgf0e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('Connection à MongoDb réussie'))
	.catch((err) => console.log('Connection à MongoDb échouée', err));

