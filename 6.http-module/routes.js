const http = require('http')

const server = http.createServer((req,res)=>{
    const url = req.url
    if (url==='/'){
        res.writeHead(200,{'Content-Type':'Text/plain'})
        res.end('Home page')
    }else if (url === '/project'){
        res.writeHead(200,{'Content-Type':'Text/plain'})
        res.end('Project page')
    }else{
        res.writeHead(404,{'Content-Type':'Text/plain'})
        res.end('unknown page')
    }

})

const port= 3000
server.listen(port,()=>{
    console.log(`server is now listing on port: ${port}`)
})