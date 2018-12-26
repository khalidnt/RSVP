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

event.update = function(req,res, next){
    var id = req.params.id;
    db.one(`UPDATE events SET tilte =$1, location = $2 WHERE id = $3 RETURNING id;`, [res.locals.name], [res.locals.location], [req.params.id])
    .then(function(result){
        res.locals.event = result;
        next();
    })
}

event.delete = function(req, res, next){
    db.none("DELETE FROM events WHERE id=$1;", [req.params.id])
    .then(function(){
        next();
    })
}

module.exports = event;