AccountState = {
  "EmailNotVerfied": 0
};

var User = Success.mysql.define("users", {
  name: { type: "VARCHAR(255)", allowNull: false},
  first_name: { type: "VARCHAR(255)" },
  last_name: { type: "VARCHAR(255)" },
  email: { type: "VARCHAR(255)", allowNull: false},
  password: { type: "VARCHAR(255)", allowNull: false},
  salt: { type: "VARCHAR(255)", allowNull: false},
  accountState: { type: "TINYINT(1)", defaultValue: AccountState.EmailNotVerfied}
});

module.exports = User
