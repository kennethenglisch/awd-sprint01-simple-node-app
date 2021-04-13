const port = 3000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    router = require("./router"),
    contentTypes = require("./contentTypes"),
    utils = require("./utils");

    router.get("/", (req, res) => {
        res.writeHead(httpStatus.OK, contentTypes.html);
        utils.getFile("views/index.html", res);
    });

    router.get("/index.html", (req, res) => {
        res.writeHead(httpStatus.OK, contentTypes.html);
        utils.getFile("views/index.html", res);
    });

    router.get("/index", (req, res) => {
        res.writeHead(httpStatus.OK, contentTypes.html);
        utils.getFile("views/index.html", res);
    });

    router.get("/info", (req, res) => {
        res.writeHead(httpStatus.OK, contentTypes.html);
        utils.getFile("views/info.html", res);
    });

    router.get("/info.html", (req, res) => {
        res.writeHead(httpStatus.OK, contentTypes.html);
        utils.getFile("views/info.html", res);
    });

    http.createServer(router.handle).listen(port);
    console.log(`The server is listening on port number: ${port}`);