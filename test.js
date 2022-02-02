const https = require('https');

const hostname = '127.0.0.1';
const port = 3000;

const server = https.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at https://${hostname}:${port}/`);
});