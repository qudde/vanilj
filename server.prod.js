const express = require("express");
const app = express();
const https = require("https");
const path = require("path");
//const expressStaticGzip = require("express-static-gzip");
const proxy = require("express-http-proxy");
const url = require("url");
const dist = `./dist`;

app.use(express.static(dist));
//app.use('/', expressStaticGzip(dist));

const port = process.env.PORT || 8000;

/*
https.createServer(options, app).listen(port, function () {
  console.log("Server is running on port: " + port);
});
*/

app.get("*.js", function (req, res, next) {
  req.url = req.url + ".gz";
  res.set("Content-Encoding", "gzip");
  res.set("Content-Type", "text/javascript");
  next();
});

app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname + `/${dist}/index.html`))
);

app.listen(port);

console.log("Application listening on port: ", port);
