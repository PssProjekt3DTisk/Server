const express = require('express');
const http = require("http");
const fs = require("fs");
const server = express();
const path = require('path');
const PORT = 3000;

server.use(express.static('public'));

server.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/web page', '/index.html'));
  });

server.listen(PORT, function(error) {
    if(error) {
        console.log("Something went wrong ", error);
    } else {
        console.log("Server is listening on port " + PORT)
    }
});
/*
server.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
*/