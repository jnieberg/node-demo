const express = require('express');
const http = require('http');
const fs = require('fs'); // file system manager

const app = express();

app.post('/', (request, response) => {
	response.send('Congratulations! You made your first Node.JS server and made a POST request 🎉');
});

// get file from relative file path and send as HTML
app.get('/', (request, response) => {
	fs.readFile('./files/index.html', (error, html) => {
		// Q: Why is this not working as expected?
		response.send(html);
	});
});


// get file from relative file path and send as JSON
app.get('/images', (request, response) => {
	fs.readFile('./files/images.json', (error, json) => {
		// Q: Why is this not working as expected?
		response.send(json);
	});
});

// alter file from relative file path
app.delete('/images', (request, response) => {
	fs.writeFileSync('./files/images.json', '{}');
	response.send('DELETE successful');
});

const httpServer = http.createServer(app);
httpServer.listen(process.env.PORT || 8080, () => console.log(`App started. Go to http://localhost:${process.env.PORT || 8080}`));
