const {
    loadData
} = require('../model/db');
let email;
function homePageHandler(_req, res) {
    res.render('home/home');
}

function loginHandler(req, res) {
    email = req.body.email;
    res.redirect('/dashboard');
}

function dashboardHandler(req, res) {    
     loadData(email)
    .then((data) => res.render('dashboard/dashboard', {data}));
}
module.exports = {
    homePageHandler,
    loginHandler,
    dashboardHandler,
    email
}