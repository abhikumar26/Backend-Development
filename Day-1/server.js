import http from 'http';
const port = 4000
const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.end("<h1>Welcome to backend server</h1>")
    // } else if(req.url){
    //     res.end('<h1>This is about Page</h1>')
    // } else if(req.url){
    //     res.end('<h1>This is contact Page</h1>')
    // } else if(req.url){
    //     res.end('<h1>This is a Home page</h1>')
    // } else{
    //     res.end('<h1>No data found!</h1>')
    }
})
server.listen(port,()=>{
    console.log("server is listen in port",port);
})