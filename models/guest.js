var db = require('../controllers/guestController');

var guest = {};

guest.getAll = function(req, res, next){
    db.manyOrNone("SELECT * FROM guest;")
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