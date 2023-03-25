const { createConnection } = require("mysql");
const connection = createConnection({
  host: "paridhi2023mysqldb1.ckscrgb0xpar.ap-south-1.rds.amazonaws.com",
  user: "admin",
  password: "Rabai123",
  port: 3306,
  database: "eventpage",
});

module.exports = connection;
