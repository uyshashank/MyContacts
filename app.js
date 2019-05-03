const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;

// Custom modules
const homepage = require('./controllers/homepage');
const dashboard = require('./controllers/dashboard');

// Middlewares
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

// Get Routes
app.get('/', homepage.homePageHandler);
app.get('/dashboard', homepage.dashboardHandler);


// Post Routes
app.post('/login', homepage.loginHandler);
app.post('/save', dashboard.save);
app.post('/delete', dashboard.deleteNumber);
app.post('/update', dashboard.updateNumber);

// Starting server
app.listen(PORT, () => console.log(`Server is up at ${PORT}`));