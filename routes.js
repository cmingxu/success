require_controller = function (resource) {
  controllers_path = Success.SRC_ROOT + "/controllers";
  return require(controllers_path + "/" + resource);
};

routes = function (app) {
  app.resource("users", require_controller("users"));
  app.get("/", require_controller("welcome").index);
};

module.exports = routes
