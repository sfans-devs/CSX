/*
	CSX
	
	-> Name: index.js
	-> Description: The CSX compiler in Node.
	-> Resource: /index.js
	-> Licensing: The Unlicense
*/

/*** —————————————————— ***//*** —————————————————— ***//*** —————————————————— ***//*** —————————————————— ***/

const fs = require('fs');
const res = require('res.js');
const handlers = require('handlers.js');
const jsdom = require('jsdom');

/*** —————————————————— ***//*** —————————————————— ***//*** —————————————————— ***//*** —————————————————— ***/

// Loads an HTML file
function loadDOM(path) {
	if (typeof path !== string) {
		throw TypeError('Path to the HTML markup file must be a string');
	}
	let dom, jquery;
	fs.readFile(path, 'utf8', (error, data) => {
		if (!error) {
			// Load the text from the HTML file as a DUM with JSDom
			dom = jsdom.JSDOM(data);
			// Add jQuery to the DUM
			jquery = require('jquery')(dom.window);
		}
	});
	return jquery;
}

const args = process.argv.slice(2);
const jquery = loadDOM(args[0]);
