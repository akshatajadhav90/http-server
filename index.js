//create your own server 

const http=require("http");

const server = http.createServer((req, res)=>{
    //console.log(req.url);

    if(req.url=="/"){
        res.end("hey! welcome on home page");
    } else if(req.url=="/about"){
        res.end("hey! welcome on AboutUs page");

    } else if(req.url=="/contact"){
        res.end("hey! welcome on ContactUs page");
    } else{
        res.end("404 erroe pages. page doesn't exist");
    }
    
});

//creating request to the server

server.listen(8000, "127.0.0.1",()=>{
    console.log("listening to the pot no 8000");
});