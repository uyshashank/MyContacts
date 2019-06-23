const {
    loadData,
    userCount,
    closeDB,
    connect,
    showMeInfo
} = require('../model/db');
let email;

function homePageHandler(_req, res) {
    res.render('home/home');
}

function loginHandler(req, res) {
    email = req.body.email;
    res.redirect('/dashboard');
}

function dashboardHandler(_req, res) {
    connect()
        .then((localclient) => {
            userCount(localclient);
            loadData(email)
                .then((data) => res.render('dashboard/dashboard', {
                    data,
                    email
                }));
        })
        .catch((err) => {
            console.log("Something went wrong - " + err);
        })

}

function logout(_req, res) {
    closeDB();
    res.redirect('/');
}

function userInfo(_req, res) {
    connect()
        .then((localclient) => {
            showMeInfo(localclient)
                .then((result) => {
                    res.send(result);
                })
                .catch((err) => {
                    res.send(err);
                })
        })
        .catch((err) => {
            console.log(err);
        });
}
module.exports = {
    homePageHandler,
    loginHandler,
    dashboardHandler,
    email,
    logout,
    userInfo
}