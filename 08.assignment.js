const express = require('express');
const http = require('http');
const fs = require('fs');
const httpRequest = require('request');
const bodyParser = require('body-parser');
const cheerio = require('cheerio');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/', (request, response) => {
	response.send('Congratulations! You made your first Node.JS server and made a POST request 🎉');
});

app.get('/', (request, response) => {
	// Q: Make your own light weight image finder
	//    Read the output HTML from "./files/images.html"
	//    Load the google homepage with the use of request.query
	//    Load both HTML respectively with cheerio.load(html); (see https://www.npmjs.com/package/cheerio)
	//    Get all elements ".rg_meta" and get the JSON data inside it. Use Cheerio's "map" function for that
	//    Put the request.query input in the output HTML's H1 (./files/images.html)
	//    In the output HTML, put all the images with link in the ".images" element
	//    Output should be formatted as: <a href="..." target="_new"><img src="..." alt="..." title="..."></a>)
	//    Output the HTML below:
	response.write('HERE');
	response.status(200).end();
});

const httpServer = http.createServer(app);
httpServer.listen(process.env.PORT || 8080, () => console.log(`App started. Go to http://localhost:${process.env.PORT || 8080}`));
