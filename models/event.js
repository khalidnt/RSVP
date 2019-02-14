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

event.addUserToEvent = function(req, res, next){
    db.one("INSERT INTO user_events (user_id, event_id) VALUES ($1, $2) RETURNING event_id;" , [req.session.user.id, req.params.id])
      .then(function(result){
        res.locals.event_id = result.event_id;
        next();
      })
      .catch(function(error){
        console.log(error);
        next();
      })
  }

  event.findByUser = function(req, res, next){
    db.manyOrNone("SELECT * FROM user_events WHERE user_id = $1 AND event_id=$2;", [req.session.user.id, req.params.id])
      .then(function(result){
        if (result.length > 0) {
          res.locals.userAttendance = true;
        } else {
          res.locals.userAttendance = false;
        }
        next();
      })
      .catch(function(error){
        console.log(error);
        next();
      })
  }
  event.removeUserFromEvent = function(req, res, next){
    db.one("DELETE FROM user_events WHERE user_id=$1 AND event_id=$2 RETURNING event_id;", [req.session.user.id, req.params.id])
      .then(function(result){
        res.locals.event_id = result.event_id;
        next();
      })
      .catch(function(error){
        console.log(error);
        next();
      })
  }
module.exports = event;