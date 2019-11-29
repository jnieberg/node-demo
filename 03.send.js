const express = require('express');
const http = require('http');

const app = express();

app.post('/', (request, response) => {
	response.send('Congratulations! You made your first Node.JS server and made a POST request 🎉');
});

// send a HTML response for path /
app.get('/', (request, response) => {
	response.send(`<!DOCTYPE html>
<html lang="en">
	<head>
		<title>NodeJS Demo App</title>
	</head>
	<body>
		<h1>Welcome to my NodeJS Demo App</h1>
		<p>Lorem ipsum</p>
	</body>
</html>`);
});


// send a JSON response for path /images
app.get('/images', (request, response) => {
	response.send({
		results: [
			{
				name: 'Nice image of a amusementpark',
				user: 'Oneisha Lee',
				url: 'https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1080&q=80',
				id: 1
			}
		]
	});
});

app.delete('/images', (request, response) => {
	response.status(401).send('Not possible to DELETE images');
});

const httpServer = http.createServer(app);
httpServer.listen(process.env.PORT || 8080, () => console.log(`App started. Go to http://localhost:${process.env.PORT || 8080}`));
