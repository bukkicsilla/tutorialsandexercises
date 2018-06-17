module.exports.main = function(req, res, next){
     res.render('index', {title: 'Welcome to the Tutorial Main Page'});  
}

module.exports.meanweb = function(req, res, next){
    res.render('meanweb', {title: 'Mean Web Development'});
}

module.exports.mobileweb = function(req, res, next){
    res.render('mobileweb', {title: 'Mobile Web Development'});
}

module.exports.medicine = function(req, res, next){
    res.render('medicine', {title: 'Medicine and Health'});
}

module.exports.math = function(req, res, next){
    res.render('math', {title: 'Math'});
}

module.exports.music = function(req, res, next){
    res.render('music', {title: 'Music'});
}

module.exports.miscellaneous = function(req, res, next){
    res.render('miscellaneous', {title: 'Miscellaneous'});
}