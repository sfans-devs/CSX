/*
	CSX
	
	-> Name: _handlers.js
	-> Description: Handlers and top–level functions in CSX
	-> Resource: /_handlers.js
	-> Licensing: The Unlicense
*/

/*** —————————————————— ***//*** —————————————————— ***//*** —————————————————— ***//*** —————————————————— ***/

const stdout = require("process");

/*** —————————————————— ***//*** —————————————————— ***//*** —————————————————— ***//*** —————————————————— ***/

function write_stdout(_content) {
	if (typeof _content !== string) {
		throw TypeError('stdout content must be a string');
	}
	stdout.write(_content);
	stdout.write(`\n`);
}

async function listen_stdout(dom) {
	let _stdout = stdout.text();
	let content = dom('stdout').text();
	// Diff the actual stdout text and the text in the <stdout> element
	// When they are different, write the content to stdout
	while (stdout.text() === `${content}\n`) {}
	write_stdout(content);
	listen_stdout(dom);
}