var express = require('express');
var router = express.Router();

var guest = require('../models/guest');
var auth = require('../middleware/auth');

router.get('/', guest.getAll, renderIndex);
router.post('/', guest.create, redirectShow);

router.get('/:id', guest.getById, renderShow);
router.get('/:id', guest.update, renderShow);
router.get('/new', renderNew);
router.get('/:id', auth.onlyUsers, guest.find, renderShow);

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

function renderNew(req, res){
    res.render('./guests/new');
  }
module.exports = router;
