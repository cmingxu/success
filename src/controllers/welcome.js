welcome = {
  index: function (req, res, next) {
    res.render("welcome/index");
  },

  dashboard: function (req, res, next) {
  },

  setting: function () {
  }
}

module.exports = welcome;
