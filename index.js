// Various modules needed.
var express = require ('express');
var app = express ();
var http = require('http').Server (app);
var io = require ('socket.io')(http);

// Keep track of the number of uses connected to the application.
var numConnections = 0;

// Set to port 500.
app.set('port', (process.env.PORT || 5000));

// Set directories for routing.
app.set ('views', __dirname + '/views');
app.use (express.static (__dirname + '/public'));

// Render the webpage.
app.get ('/', function (req, res)
{
  res.render ('index.ejs');
});

// Keep track of connected users and watch for interaction. 
io.on ('connection', function (socket)
{
  // Update display of connections upon connect/disconnect.
  numConnections++;
  io.emit ('connectionChange', numConnections);
  socket.on ('disconnect', function ()
  {
    numConnections--;
    io.emit ('connectionChange', numConnections);
  });

  // Confirm addition of task upon request to do so.
  socket.on ('addTaskClick', function (data)
  {
    io.emit ('addTaskConfirm', data);
  });
});

http.listen (app.get ('port'));