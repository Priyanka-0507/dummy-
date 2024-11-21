const http=require('http')
const createserv=http.createServer((req,res)=>{

    if(req.url==='/'){
        res.end('Welcome to my home page')
    }
    if(req.url==='/about'){
        res.end('This is all about me..')
    }
    res.end(
        `<h1>Sorry not available!!</h1>
        <a href="/">Back to home page..</a>`
        )
})
createserv.listen(5018)