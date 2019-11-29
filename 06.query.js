const express = require('express');
const http = require('http');
const httpRequest = require('request');
const bodyParser = require('body-parser'); // parse POST requests

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.all('/', (request, response) => {
	const query = request.query;
	response.setHeader('Content-Type', 'application/json');
	response.json(query);
});

// Add path query to google route
app.all('/google/:query', (request, response) => {
	const query = request.params.query;
	const options = {
		method: 'GET',
		url: 'https://www.google.com/search',
		qs: {
			q: query || '',
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


// Add body query to images route
app.all('/images', (request, response) => {
	const query = request.body.query || '';
	const options = {
		method: 'GET',
		url: 'https://api.unsplash.com/search/photos',
		qs: {
			query: query,
			client_id: 'fe80479d4d6c4382e6ac3ea6197bfa31130372f6b3eaabd67bbc631042ca164f'
		}
	};
	httpRequest(options, (error, res, json) => {
		response.setHeader('Content-Type', 'application/json');
		response.write(json);
		response.status(200).end();
	});
});

const httpServer = http.createServer(app);
httpServer.listen(process.env.PORT || 8080, () => console.log(`App started. Go to http://localhost:${process.env.PORT || 8080}`));
