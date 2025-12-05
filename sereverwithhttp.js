import http from 'http';
const server=http.createServer((req,res)=>{
    if(req.url==="/users"){
    res.writeHead(200,{"content-type":"application/json"});
    res.end(JSON.stringify({name:"nikhila"}))
    }
    else{
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("hello from backend");}
})
server.listen(7002,()=>
{
    console.log("Server is running at port ${7002}");
})