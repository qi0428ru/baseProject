'use strict';
var index = require('./pages/index');
/*
var family = require('./pages/family');
var Counter = require('./pages/counter');
var Mobx = require('./pages/mobx');

var whs = require('./pages/whs');

var search = require('./pages/search');

var vueCounter = require('./pages/vueCounter');*/

module.exports = function(app) {
    app.use('/', index);
    /*app.use('/api', api);

    app.use('/family', family);
    app.use('/counter', Counter);
    app.use('/mobx', Mobx);
    app.use('/whs', whs);
    app.use('/search', search);
    app.use('/vueCounter', vueCounter);*/


    app.use(function(req, res, next) {
        res.status(404).render('pages/error/404');
    });

    app.use(function(error, req, res, next) {
        res.status(500).render('pages/error/500');
    });
};