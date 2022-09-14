const fs = require('fs')
const http = require('http')

fs.writeFile('index.html', '<h1> Hello World</h1>\n<p> This is {Your Name}... </p>',()=>{
})

const server = http.createServer((req, res) => {
    fs.readFile('index.html', (err, data) =>{
        res.end(data);
    })
})

server.listen(3000);