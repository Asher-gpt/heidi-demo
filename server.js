const http = require('http');
const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'index.html');
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  fs.createReadStream(file).pipe(res);
}).listen(3456, () => console.log('Serving on http://localhost:3456'));
