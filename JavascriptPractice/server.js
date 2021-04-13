var express = require('express');
const path = require('path');
var app = express();

app.listen(3000, function() {
    console.log('Listening on port 3000');
});

//Change the './' to point to the root of your angular app
app.use(express.static('web'));

//Send everything to your index.html page
app.get('/*', function(req, res) {
  //res.sendFile(path.resolve('./index.html'));
  res.send(path.resolve('./index.html'));
 });