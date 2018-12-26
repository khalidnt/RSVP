var express = require('express');
var router = express.Router();

var event = require('../models/event');

router.get('/', event.getAll, renderIndex);

router.get('/:id', event.getById, renderShow);



function renderIndex(req, res){
    var mustacheVariables = { 
        eventlist: res.locals.event
    }   
    res.render('./events/index', mustacheVariables);
}

function renderShow(req, res){
    var mustacheVariables = {
       event: res.locals.event
    }   
    res.render('./events/show', mustacheVariables);
}


module.exports = router;