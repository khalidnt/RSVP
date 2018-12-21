var express = require('express');
var router = express.Router();

var guest = require('../models/guest');

router.get('/', guest.getAll, renderIndex);

router.get('/:id', guest.getById, renderShow);

function renderIndex(req, res){
    var mustacheVariables = {
        guestlist : res.locals.guest
    }
   res.render('./guests/index', mustacheVariables);
}


function renderShow(req, res){
    var mustacheVariables = {
       guests: res.locals.guest
    }
   res.render('./guests/show', mustacheVariables);
}
module.exports = router;