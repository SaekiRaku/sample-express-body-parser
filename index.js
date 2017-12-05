/**
 * # first
 * node index.js
 * 
 * # then
 * node do_post.js
 */
var express = require("express");
var app = express();

app.use(express.json({
    type: "*/*"
}))

app.post("/api/test", function(req, res) {
    console.log(req.body);
    res.send("ok");
})

app.listen(12580, function() {
    console.log("Express is ready, Then 'node do_post.js'");
})