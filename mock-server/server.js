const jsonServer = require("json-server");
const fs = require("fs");
var cors = require("cors");
const server = jsonServer.create();
const router = jsonServer.router("mock.json");
const middlewares = jsonServer.defaults();
const bodyParser = require("body-parser");

server.use(cors());

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.get("/bookmarks/filter", (req, res) => {
  let rawdata = fs.readFileSync("mock.json");
  let data = JSON.parse(rawdata);
  let cols = data["bookmarks"];
  let filteredData = [];
  console.log("test", req.query);
  if (req.query.searchedValue && req.query.searchedValue !== "") {
    filteredData = cols.filter(
      (elem) =>
        elem.url
          .toLowerCase()
          .includes(req.query.searchedValue.toLowerCase()) ||
        elem.name.toLowerCase().includes(req.query.searchedValue.toLowerCase())
    );
  } else {
    filteredData = [];
  }
  res.json(filteredData);
});

server.get("/bookmarks", (req, res) => {
  let rawdata = fs.readFileSync("mock.json");
  let data = JSON.parse(rawdata);
  let cols = data["bookmarks"];
  console.log("test", cols);
  res.json(cols);

  //IF YOU WANT TO TEST HOW ERROR HANDLING WORKS, COMMENT FIRST PART AND UNCOMMENT THE BELOW PART

  // return res.status(400).send({
  //   timestamp: "2024-03-19T14:39:29.967+00:00",
  //   status: 400,
  //   error: "Request body could not be read properly.",
  //   message: "Bad Request",
  // });
});

server.use(middlewares);
server.use(router);

server.listen(3000, () => {
  console.log("server running on 3000");
});
