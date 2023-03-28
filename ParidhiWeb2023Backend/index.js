const express = require("express");
// const connection = require("./database");
const https = require("https");
const app = express();
const router = require("./router");

const port = process.env.PORT || 6969;
// const cors = require("cors");
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://msitparidhi.in');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

const { createConnection } = require("mysql");
const connection = createConnection({
  host: "paridhi2023mysqldb1.ckscrgb0xpar.ap-south-1.rds.amazonaws.com",
  user: "admin",
  password: "Rabai123",
  port: 3306,
  database: "eventpage",
});

var sqlRowstoJSON=(rows)=>{
  var newObj = [];
  rows.forEach((row) => {
    var myjson = {};
    for (const key in row) {
      if (Object.hasOwnProperty.call(row, key)) {
        myjson[key] = row[key];
        
      }
    }
    newObj.push(myjson);
  });
  return newObj;
};

var getDataQuery = `select * from 
eventlist left join Domains on eventlist.DomainID = Domains.DomainID 
union
select * from
eventlist right join Domains on eventlist.DomainID = Domains.DomainID`;

const codQuery = "select * from eventlist left join Domains on eventlist.DomainID = Domains.DomainID where eventlist.DomainID = 2  order by eventlist.DomainID";
const roboQuery = "select * from eventlist left join Domains on eventlist.DomainID = Domains.DomainID where eventlist.DomainID = 1  order by eventlist.DomainID";
const civQuery = "select * from eventlist left join Domains on eventlist.DomainID = Domains.DomainID where eventlist.DomainID = 6  order by eventlist.DomainID";
const gamQuery = "select * from eventlist left join Domains on eventlist.DomainID = Domains.DomainID where eventlist.DomainID = 3  order by eventlist.DomainID";
const eleQuery = "select * from eventlist left join Domains on eventlist.DomainID = Domains.DomainID where eventlist.DomainID = 4 order by eventlist.DomainID";
const genQuery = "select * from eventlist left join Domains on eventlist.DomainID = Domains.DomainID where eventlist.DomainID = 5  order by eventlist.DomainID";
app.get("/events", async (req, res) => {
  var eventObjectJson = {
    "allevents":[]
  };
  await connection.query(codQuery,(err, result, field) => {
    if (err) return console.log(err);
    var newObj = {
      "domain":`Coding`
    };
    newObj["domainevents"] = sqlRowstoJSON(result);
    eventObjectJson["allevents"].push(newObj);
    // res.send(eventObjectJson);
  }
);
await connection.query(roboQuery,(err, result, field) => {
  if (err) return console.log(err);
  var newObj = {
    "domain":`Robotics`
  };
  newObj["domainevents"] = sqlRowstoJSON(result);
  eventObjectJson["allevents"].push(newObj);
  // res.send(eventObjectJson);
}
);
await connection.query(gamQuery,(err, result, field) => {
  if (err) return console.log(err);
  var newObj = {
    "domain":`Gaming`
  };
  newObj["domainevents"] = sqlRowstoJSON(result);
  eventObjectJson["allevents"].push(newObj);
  // res.send(eventObjectJson);
}
);
await connection.query(eleQuery,(err, result, field) => {
  if (err) return console.log(err);
  var newObj = {
    "domain":`Electrical`
  };
  newObj["domainevents"] = sqlRowstoJSON(result);
  eventObjectJson["allevents"].push(newObj);
  // res.send(eventObjectJson);
}
);

await connection.query(genQuery,(err, result, field) => {
  if (err) return console.log(err);
  var newObj = {
    "domain":`General`
  };
  newObj["domainevents"] = sqlRowstoJSON(result);
  eventObjectJson["allevents"].push(newObj);
  // res.send(eventObjectJson);
}
);
await connection.query(civQuery,(err, result, field) => {
  if (err) return console.log(err);
  var newObj = {
    "domain":`Civil`
  };
  newObj["domainevents"] = sqlRowstoJSON(result);
  eventObjectJson["allevents"].push(newObj);
  res.send(eventObjectJson);
}
);
});

// app.listen(port, () => {
//   console.log(`listening to port ${port}`);
// });
https
  .createServer({
    key: fs.readFileSync("key.pem"),
    cert: fs.readFileSync("cert.pem"),
  },app)
  .listen(port, ()=>{
    console.log('server is runing at port '+port)
  });
