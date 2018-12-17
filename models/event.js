var db = require('../controllers/eventContrroller');

var event = {};

event.getAll = function(req, res, next){
    db.manyOrNone("SELECT * FROM event;")
        .then(function(result){
            res.locals.event = result;
            next();
          })
          .catch(function(error){
            console.log(error);
            next();
          })
      }
event.getById = function (req, res, next) {
var id = req.params.id;
db.oneOrNone("SELECT * FROM event WHERE id = $1;", [id])
    .then(function(result){
    res.locals.event = result;
    next();
    })
    .catch(function(error){
    console.log(error);
    next();
    })
}      



module.exports = event;