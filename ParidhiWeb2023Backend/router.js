const { Router } = require("express");
const connection = require("./database");
const router = Router();

router.get("/", async (req, res) => {
  await connection.query(
    "select * from eventlist left join Domains on eventlist.DomainID = Domains.DomainID ",
    (err, result, field) => {
      if (err) return console.log(err);
      res.json(result);
    }
  );
});

module.exports = router;
