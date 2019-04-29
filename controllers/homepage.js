function homePageHandler(req,res){
    res.render('home/home');
}

function loginHandler(req,res){    
    res.redirect('/dashboard');
}

function dashboardHandler(req,res){
    res.render('dashboard/dashboard');
}
module.exports = {
    homePageHandler,
    loginHandler,
    dashboardHandler
}