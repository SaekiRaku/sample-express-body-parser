var request = require("request");

request.post("http://127.0.0.1:12580/api/test", { test: "abc" }, function(err, res, body) {
    console.log(body);
})