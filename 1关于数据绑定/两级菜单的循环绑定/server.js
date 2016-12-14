var http = require("http");
var url = require("url");
var fs = require("fs");

var server = http.createServer(function (request, response) {

    var data = fs.readFileSync("./data.json", "utf8");
    response.write(data)

});
server.listen(8888);










