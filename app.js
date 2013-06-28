
/**
 * Module dependencies.
 */

if(process.env.NODE_ENV == undefined)
  process.env.NODE_ENV = "dev"

var express = require('express')
  , path = require('path')
  , config = require("./config/" + process.env.NODE_ENV)
  , routes = require('./routes')
  , logger = require("./lib/logger");

require('express-resource')
require('./boot')

logger.level = "debug";

var config = require(Success.ROOT + "/config/" + process.env.NODE_ENV);
Success.mysql = require(Success.MYSQL)(config);

module.exports = {mysql: mysql}


var app = express();

app.configure(function(){
  app.set('port', config.port || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});


routes(app);
console.log(app.routes);

app.configure('development', function(){
  app.use(express.errorHandler());
});


module.exports = app
