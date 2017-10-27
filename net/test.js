var http = require('http'),
fs = require('fs');


fs.readFile('./index.html', function (err, html) {
if (err) {
    throw err; 
}       
http.createServer(function(req, response) {  
    var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
    console.log(ip)
    if (ip == '::1') // exit if it's a particular ip
        {response.end();
        console.log(ip)}
    else{
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }    
    
}).listen(3000);
});