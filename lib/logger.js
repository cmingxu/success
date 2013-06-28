logger = function () {
    default_level= "debug";
    levels= { debug: 1,
      info: 2,
      warnning: 3,
      error: 4
    };


  arguments_to_str = function(args){
    results = [];
    for(key in args){
      results.push(args[key]);
    }
    return results.join(", ");
  };


  return {
    log: function (level, str) {
      if(levels[level] >= levels[default_level])
        process.stdout.write("[" + level.toUpperCase() + "] " + str  + "\n");
    },

    debug: function () {
      this.log("debug", arguments_to_str(arguments));
    },

    info: function () {
      this.log("info", arguments_to_str(arguments));
    },

    warnning: function () {
      this.log("warnning", arguments_to_str(arguments));
    },

    error: function () {
      this.log("error", arguments_to_str(arguments));
    },

  }
}

module.exports = new logger()
