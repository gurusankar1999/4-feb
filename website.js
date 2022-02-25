var http = require ('http');
http.createserver(function(req,res){
res.writeHead(200,{'content-type':'text/plain'});z
res.write("welocome to guru gaming channel");
res.end("thank for watching");
}).listen(8080);