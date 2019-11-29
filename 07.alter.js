const express = require('express');
const http = require('http');
const httpRequest = require('request');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/', (request, response) => {
	response.send('Congratulations! You made your first Node.JS server and made a POST request 🎉');
});

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
		// Q: Map into light weight JSON response
		response.setHeader('Content-Type', 'application/json');
		response.write(json);
		response.status(200).end();
	});
});

const httpServer = http.createServer(app);
httpServer.listen(process.env.PORT || 8080, () => console.log(`App started. Go to http://localhost:${process.env.PORT || 8080}`));
