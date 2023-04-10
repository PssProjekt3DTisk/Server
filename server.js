const express = require('express');
const server = express();
const path = require('path');
const PORT = 3000;

server.use('*/css',express.static('public/css'));
server.use('*/js',express.static('public/js'));
server.use('*/img',express.static('public/img'));

server.get('/index.html', function(req, res) {
    res.sendFile(path.join(__dirname+ '/index.html'));
});

server.get('/order.html', function(req, res) {
    res.sendFile(path.join(__dirname+ '/order.html'));
});

server.get('/aboutPrinter.html', function(req, res) {
    res.sendFile(path.join(__dirname+ '/aboutPrinter.html'));
});

server.get('/photos.html', function(req, res) {
    res.sendFile(path.join(__dirname+ '/photos.html'));
});

server.get('/contact.html', function(req, res) {
    res.sendFile(path.join(__dirname+ '/contact.html'));
});

server.get('/main.js', function(req, res) {
    res.sendFile(path.join(__dirname+ '/main.js'));
});

server.listen(PORT, function(error) {
    if(error) {
        console.log("Something went wrong ", error);
    } else {
        console.log("Server is listening on port " + PORT);
    }
});

server.use(express.json());
const nodeMailer = require('nodemailer');

server.post("/ajax/email", async function(req, res){

    const transporter = nodeMailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "node10mailer@gmail.com",
            pass: "jnyaopbrzgiegqga",
        }
    });

    //console.log(req.body.file);

    var mail = {
        from: req.body.email+ " <node10mailer@gmail.com>",
        to: "ppsprojekt3dtisk@seznam.cz",
        subject: "Jmeno zakaznika: " +req.body.name,
        text: req.body.description,
        attachments: {
            filename: req.body.filename,
            path: req.body.file,
        },
    };

    await transporter.sendMail(mail, function(err, info){
        if(err){
            console.log("Error: " +err);
        }
        else {
            console.log("Message sent: " +info.messageId);
            console.log("accepted: " +info.accepted);
            console.log("rejected: " +info.rejected);
        }
    });
});