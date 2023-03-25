const express = require("express");
const connection = require("./database");

const app = express();
const router = require("./router");

const port = process.env.PORT || 6969;
const cors = require("cors");
app.use(cors());
// app.use(router)
app.get("/events", async (req, res) => {
  await connection.query(
    "select * from eventlist left join Domains on eventlist.DomainID = Domains.DomainID ",
    (err, result, field) => {
      if (err) return console.log(err);
      res.json(result);
    }
  );
});

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
