const express = require('express'); // express routing module
const http = require('http'); // server creation module

// app will be the express module
const app = express();

// create request event for root /
app.all('/', (request, response) => {
	response.send(`Congratulations! You made your first Node.JS server and ${request.method} request 🎉`);
});

// create the server
const httpServer = http.createServer(app);
// apply listener to port 8080 and send console message when successful
httpServer.listen(process.env.PORT || 8080, () => console.log(`App started. Go to http://localhost:${process.env.PORT || 8080}`));
