var express = require ('express');
var app = express ();

app.set('port', (process.env.PORT || 5000));
app.set ('views', __dirname + '/views');
app.use (express.static (__dirname + '/public'));

app.get ('/', function (req, res)
{
  res.render ('index.ejs');
});

app.listen (app.get ('port'));