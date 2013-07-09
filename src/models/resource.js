var Resource = Success.mysql.define("resource", {
  name: { type: "VARCHAR(255)", allowNull: false},
  file_name: { type: "VARCHAR(255)", allowNull: false},
  mime: { type: "VARCHAR(255)", allowNull: false},
  user_id: (type: "bigint(11)", allowNull: false}
});

module.exports = Resource
