var port = 1357;

var http = require('http'),
	path = require('path'),
	mime = require('mime'),
	fs = require('fs'),
	GUID = require('GUID'),
	formidable = require('formidable'),
	util = require('util');

var app = http.createServer( function(req, res) {

	if(req.method === 'POST') {

		if (req.url === '/upload') {

			req.on('error', function(e) {
			  console.log('Problem with request: ' + e.message);
			});

			var filedirectory = __dirname + '/db/',
				form = new formidable.IncomingForm();
			
			form.keepExtensions = true;
			form.uploadDir = __dirname + '/db';

		    form.parse(req, function(err, fields, files) {
		    	
		    	if(err) throw(err);
		    	
		    	var pic = JSON.stringify(util.inspect(files)),
			    	upIndx = pic.indexOf('db'),
			    	path = pic.slice(upIndx + 6, upIndx + 42);

		    	res.writeHead(200, {'Content-Type': 'text/html'});
				fs.readFile('views/index.html', function (err, page) {
		            res.writeHead(200, {'Content-Type': 'text/html'});
		            res.write(page);
		            res.write('<div>Download Link: </div><div>' + __dirname + '/db/' + path + '</div>');
		            res.end();
		        });
		    });

		}
	}

		else {

			if (req.url === '/home') {
		        fs.readFile('views/index.html', function (err, page) {
		            res.writeHead(200, {'Content-Type': 'text/html'});
		            res.write(page);
		            res.end();
		        });
		    }

		    else if (req.url === '/about') {
		        fs.readFile('views/about.html', function (err, page) {
		            res.writeHead(200, {'Content-Type': 'text/html'});
		            res.write(page);
		            res.end();
		        });
		    }

		    else if (req.url === '/styles/styles.css') { 
		    	fs.readFile('styles/styles.css', function (err, page) { 
		    		res.writeHead(200, {'Content-Type': 'text/css'});
		    		res.write(page);
		    		res.end();
		    	}); 
		    }

		    else if(req.url === '/favicon.ico') {

		    	res.writeHead(200, {'Content-Type': 'text/css'});
		    	res.end();
		    }

		    	else {
		    		res.writeHead(301,
					  {Location: '/home'}
					);
					res.end();
		    	}
		}

});

app.listen(port);
console.log('Server running on port: ' + port)