const {
    loadData
} = require('../model/db');

function homePageHandler(req, res) {
    res.render('home/home');
}

function loginHandler(req, res) {
    res.redirect('/dashboard');
}

function dashboardHandler(_req, res) {
    loadData()
    .then((data) => res.render('dashboard/dashboard', {data}));
}
module.exports = {
    homePageHandler,
    loginHandler,
    dashboardHandler
}