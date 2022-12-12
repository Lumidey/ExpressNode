const http = require('http')
const server= http.createServer((req,res)=>{
   if(req.url === '/'){
    res.end('Welcome to my homepage')
   }
   if(req.url === '/about'){
    res.end('We have alot you would like to know about us')
   }
   res.end(`
   <h1>Oops!</h1>
   <p> We cant seem to find the page you are looking for</p>
    <a href="/">back home</a>
   
   `)
   // The error page fails to load
    
   
})
server.listen(9000)