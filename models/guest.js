var db = require('../db/dbconfig');

var guest = {};

guest.getAll = function(req, res, next){
    db.manyOrNone("SELECT * FROM guests;")
        .then(function(result){
            res.locals.guest = result;
            next();
          })
          .catch(function(error){
            console.log(error);
            next();
          })
      }

guest.getById = function (req, res, next) {
    var id = req.params.id;
    db.oneOrNone("SELECT * FROM guest WHERE id = $1;", [id])
        .then(function(result){
        res.locals.guest = result;
        next();
        })
     .catch(function(error){
     console.log(error);
        next();
        })
}      

guest.update = function(req, res, next){
    db.one(`UPDATE guests SET name = $1, email =$2 WHERE id=$3 RETURNING id;`, [req.body.name], [req.body.email], [req.params.id])
    .then(function(result){
        res.locals.guest = result;
        next();
    })
    .catch(function(error){
        console.log(error);
        next();
    })
}





module.exports = guest;