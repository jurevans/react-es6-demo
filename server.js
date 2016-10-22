

var http = require('http');

var app = require('./app')();






<<<<<<< HEAD
var port = process.env.PORT || 3001; 		// set our port
=======
var port = process.env.PORT || 3000; 		// set our port
>>>>>>> f227e3f997acfba8b6e346bdc4a5053f73446d0f
var host = process.env.HOST || '0.0.0.0'; // For Heroku to run successfully

http.createServer(app).listen(port, host, function () {
  console.log("Server ready at http://localhost:" + port);
});
