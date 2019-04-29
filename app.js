const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;

// Custom modules
const homepage = require('./controllers/homepage');

// Middlewares
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

// Routes
app.get('/', homepage.homePageHandler);

// Starting server
app.listen(PORT, ()=> console.log(`Server is up at ${PORT}`));