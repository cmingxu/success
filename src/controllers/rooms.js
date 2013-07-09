
/*
 * GET users listing.
 */


Room = require(Success.MODEL_ROOT + "/room");
Tag  = require(Success.MODEL_ROOT + "/tag");

rooms = {
   index: function (req, res, next) {
     res.render("rooms/index");
   }
};

module.exports = rooms;
