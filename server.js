const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (req, res) {
     res.sendFile(__dirname + "/index.html");
});
app.listen(3000, function () {
     console.log("Server has started ");
});
app.get("/", function (req, res) {
     res.send("<h1>CALCULATOR</h1>");
});
app.post("/", function (req, res) {
     console.log(req.body);
     var n1 = Number(req.body.num1);
     var n2 = Number(req.body.num2);
     var result = n1 / (n2 + n2);
     res.send("The answer is " + result);
})
