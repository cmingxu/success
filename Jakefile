require('./app');

task("refresh_db", function () {
  Success.mysql.sync({force: true});
})


task("seed", function () {
  Success.mysql.sync({force: true});
  User = require(Success.MODEL_ROOT + "/user");
  Room = require(Success.MODEL_ROOT + "/room");

  [{name: "foo", email: "foo@example.com", password: "password", salt: "salt" },
  {name: "bar", email: "bar@example.com", password: "password", salt: "salt" }].forEach(function (user) {
    User.build(user).save().success(function () {
      console.log("user created");
    }).error(function (error) {
      console.log(error);
    })
  });

  Room.build({name: "Class Room", identifier: "room-identifier"}).save()
})
