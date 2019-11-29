const express = require('express');
const http = require('http');
const httpRequest = require('request'); // get HTTP response from url request

const app = express();

app.all('/', (request, response) => {
	response.send('Congratulations! You made your first Node.JS server and made a POST request 🎉');
});

// create HTTP request with query. Send a standard GET request to google.com/search
app.get('/google', (request, response) => {
	const options = {
		method: 'GET',
		url: 'https://www.google.com/search',
		qs: {
			q: 'google',
			tbm: 'isch'
		},
		headers: {
			'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'
		}
	};
	httpRequest(options, (error, res, htmlA) => {
		response.setHeader('Content-Type', 'text/html');
		response.write(htmlA);
		response.status(200).end();
	});
});


// create JSON request with query. Send a GET request to api.unsplash.com/search/photos
app.all('/images', (request, response) => {
	const options = {
		method: 'GET',
		url: 'https://api.unsplash.com/search/photos',
		qs: {
			query: 'cats',
			client_id: 'fe80479d4d6c4382e6ac3ea6197bfa31130372f6b3eaabd67bbc631042ca164f'
		}
	};
	httpRequest(options, (error, res, jsonS) => {
		response.setHeader('Content-Type', 'application/json');
		response.write(jsonS);
		response.status(200).end();
	});
});

const httpServer = http.createServer(app);
httpServer.listen(process.env.PORT || 8080, () => console.log(`App started. Go to http://localhost:${process.env.PORT || 8080}`));
