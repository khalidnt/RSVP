var express = require('express');
var router = express.Router();

var event = require('../models/event');

router.get('/', event.getAll, renderIndex);
router.get('/new', renderNew);
router.get('/:id', event.getById, renderShow);
router.post('/:id/register', event.addUserToEvent, redirectShow);
router.delete('/:id/register', event.removeUserFromEvent, redirectShow);



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

function renderNew(req, res){
  res.render('/events/new')
}


module.exports = router;
