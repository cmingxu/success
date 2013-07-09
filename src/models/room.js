var Room = Success.mysql.define("rooms", {
  name: { type: "VARCHAR(255)", allowNull: false},
});

module.exports = Room
