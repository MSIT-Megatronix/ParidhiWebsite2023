const { Router } = require("express");
const db = require("./database");
var getDataQuery = `select * from 
eventlist left join Domains on eventlist.DomainID = Domains.DomainID 
union
select * from
eventlist right join Domains on eventlist.DomainID = Domains.DomainID`;

const router = Router();

router.get("/", async (req, res) => {
  const results = await db.query(getDataQuery);
  console.log(results);
  res.json({results})
});


