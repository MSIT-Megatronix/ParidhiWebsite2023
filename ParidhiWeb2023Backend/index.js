const express = require("express");
const app = express();
const port = process.env.PORT || 6969;
const cors = require("cors");

app.use(cors());

const { createConnection } = require("mysql");
const connection = createConnection({
  host: "paridhi2023mysqldb1.ckscrgb0xpar.ap-south-1.rds.amazonaws.com",
  user: "admin",
  password: "Rabai123",
  port: 3306,
  database: "eventpage",
});

var getDataQuery = `select * from 
eventlist left join Domains on eventlist.DomainID = Domains.DomainID 
union
select * from
eventlist right join Domains on eventlist.DomainID = Domains.DomainID`;

app.get("/events", async (req, res) => {
  await connection.query(
    "select * from eventlist left join Domains on eventlist.DomainID = Domains.DomainID ",
    (err, result, field) => {
      if (err) throw err;
      res.json(result);
    }
  );
});
//   console.log(results);
//   res.send(results);

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
