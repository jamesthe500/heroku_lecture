var express = require('express');
var app = express();
var path = require('path'); //briningin in path

app.set('port', (process.env.PORT || 5000)); // Heroku sets the PORT, that's what this is about. Use that If we are on Heroku or use 5000.

app.get('/', function(req, res){
    // console.log("here is __dirname" + __dirname); // what it says now, will be different from what it'll say on heroku. It's like(this).
    res.sendFile(path.join(__dirname, "./public/views/index.html")); //__dirname references the path
});
// there is a compiler sweep in node as well, so order not vital
app.listen(app.get('port'), function(){  // gets the port from up above. We don't know what it'll be, we don't care, it just needs to match.
    console.log("Listening on port: " + app.get('port')); // the line above is the critical part of this code.
});