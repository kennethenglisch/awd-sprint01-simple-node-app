const port = 3000,
 http = require("http"),
 httpStatus = require("http-status-codes"),
 app = http.createServer((request, response) => {
    console.log("Anfrage erhalten!");
    response.writeHead(httpStatus.OK, { //StatusCodes.OK, {
        "Content-Type": "text/html"
        });

    let responseMessage = "<h1>Hello, Universe!</h1>";
    response.write(responseMessage);
    response.end();
    console.log(`Antwort wurde verschickt : ${responseMessage}`);
 });

app.listen(port);
console.log(`Der Server wurde gestartet und lauscht an Port: ➥ ${port}`);