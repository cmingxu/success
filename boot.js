path = require('path');

global.Success = {};
Success.ROOT = path.dirname(__filename); 
Success.SRC_ROOT = path.join(Success.ROOT, "src")
Success.MODEL_ROOT = path.join(Success.ROOT, "src/models")
Success.MYSQL = path.join(Success.ROOT, "storage", "db")
