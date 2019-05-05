const {
    loadData,
    userCount,
    closeDB,
    connect
} = require('../model/db');
let email;
function homePageHandler(_req, res) {    
    console.log("connecting");    
    res.render('home/home');
}

function loginHandler(req, res) {
    email = req.body.email;    
    res.redirect('/dashboard');
}

function dashboardHandler(_req, res) {    
    connect()
    .then((localclient)=>{
        userCount(localclient);        
        loadData(email)
        .then((data) => res.render('dashboard/dashboard', {data, email}));
    })
    .catch((err)=>{
        console.log("Something went wrong - " + err);
    })
    
}

function logout(_req, res){
    closeDB();    
    res.redirect('/');
}
module.exports = {
    homePageHandler,
    loginHandler,
    dashboardHandler,
    email,
    logout
}