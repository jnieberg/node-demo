const express = require('express');
const http = require('http');

const app = express();

app.all('/', (request, response) => {
	response.send(`Congratulations! You made your first Node.JS server and made a ${request.method} request 🎉`);
});

// make a route for path /images
app.route('/images')
	// create GET request, for path /images
	.get((request, response) => {
		response.send('Yo GET the images!');
	})
	// create DELETE request, for path /images and send it as a 401 status response
	.delete((request, response) => {
		response.status(401).send('Yikes! Not possible to DELETE images');
	});

const httpServer = http.createServer(app);
httpServer.listen(process.env.PORT || 8080, () => console.log(`App started. Go to http://localhost:${process.env.PORT || 8080}`));
