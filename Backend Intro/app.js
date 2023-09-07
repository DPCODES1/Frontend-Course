const http = require('http');

function renderer(req,res) {
    if(req.url == '/') {
        res.end("<h1>Hi</hi>")
    } else if(req.url == '/currenttime') {
        const date = new Date().toISOString()
        res.end(`<h1>${date}</h1>`)
    }
}

const server = http.createServer(renderer)

server.listen(3000)