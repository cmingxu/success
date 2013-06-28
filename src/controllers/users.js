
/*
 * GET users listing.
 */


User = require(Success.MODEL_ROOT + "/user");
Tag  = require(Success.MODEL_ROOT + "/tag");

users = {
   index: function (req, res, next) {
     console.log(User);
     console.log(Tag);
     res.render("users/index");
   }
};

module.exports = users;
