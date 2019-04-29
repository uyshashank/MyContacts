const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;

// Custom modules
const homepage = require('./controllers/homepage');

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

// Get Routes
app.get('/', homepage.homePageHandler);
app.get('/dashboard', homepage.dashboardHandler);


// Post Routes
app.post('/login', homepage.loginHandler);

// Starting server
app.listen(PORT, ()=> console.log(`Server is up at ${PORT}`));