const http = require('http')

const server = http.createServer((req, res) => {
    // console.log(req.url) //which route we are hitting
    // res.end('Hello World')

    // Routing
    if(req.url == "/about") {
        res.end("The About Page")
    }

    if(req.url == "/profile") {
        res.end("The Profile Page")
    }

    if(req.url == "/") {
        res.end("The Home Page")
    }
})

// npx nodemon app.js -> This command helps to run as we update the code reducing to use always "node <file name>" command

server.listen(3000)