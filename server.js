const net = require("net");
const fs = require("fs");

const server = met.createServer((socket) => {
    socket.on("data", (buffer) => {
        const requestString = buffer.toString("utf-8");

        const request = parseRequest(requestString);

        console.log(request.method, request.path, request.protocol);

        if(request.method === "GET") {
            if(fs.existsSync(`${request.path}`)) {
                socket.write("HTTP/1.0 200 OK");
            } else {
                socket.write("HTTP/1.0 404 Not Found");
            }
            
        }

    })
})

const parseRequest = (requestString) => {
    const [method, path, protocol] = requestString.split("");

    return {
        method,
        path,
        protocol
    }
}

server.listen(9999, () => console.log("Listening"));