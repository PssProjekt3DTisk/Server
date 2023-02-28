const express = require('express');
const http = require("http");
const fs = require("fs");
const server = express();
const path = require('path');
const PORT = 3000;

server.use('*/css',express.static('public/css'));
server.use('*/js',express.static('public/js'));
server.use('*/img',express.static('public/img'));
server.use(express.static(__dirname+ '/public'));

server.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+ '/index.html'));
  });

server.listen(PORT, function(error) {
    if(error) {
        console.log("Something went wrong ", error);
    } else {
        console.log("Server is listening on port " + PORT);
    }
});
/*
server.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
*/

/*
const http = require("http");
const fs = require("fs");
const port = 3000;

const server = http.createServer(function(req, res) {
    fs.readFile('index.html', function(error, data) {
        if(error) {
            res.writeHead(404);
            res.write("Error: File not Found");
        } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
        }
    });
    res.write("ahoj");
    res.end();
})

server.listen(port, function(error) {
    if(error) {
        console.log("Something went wrong ", error);
    } else {
        console.log("Server is listening on port " + port)
    }
});
*/