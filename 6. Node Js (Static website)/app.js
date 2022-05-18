// Open windows powershell in current directory and enter 
//node --version
//then type
// node app.js
//Go to browser and type 
//localhost:3000
const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('index.html').pipe(res)
})

server.listen(3000)