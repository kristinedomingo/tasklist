var express = require ('express');
var app = express ();
var http = require('http').Server (app);
var io = require ('socket.io')(http);

app.set('port', (process.env.PORT || 5000));
app.set ('views', __dirname + '/views');
app.use (express.static (__dirname + '/public'));

app.get ('/', function (req, res)
{
  res.render ('index.ejs');
});

io.on ('connection', function (socket)
{
  socket.on ('addTaskClick', function (data)
  {
    io.emit ('addTaskConfirm', data);
  });
});

http.listen (app.get ('port'));