var db = require('../db/dbconfig');

var event = {};

event.getAll = function(req, res, next){
    db.manyOrNone("SELECT * FROM events;")
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
        db.oneOrNone("SELECT * FROM events WHERE id = $1;", [id])
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