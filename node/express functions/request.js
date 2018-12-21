let express = require("express");
let app = express();
app.get('/:id', (req, res, next) => {
    res.end("Hello World");

    console.log("req.app:\n");
    console.log(req.app);

    console.log("\n\nreq.baseUrl:\n");
    console.log(req.baseUrl);

    console.log("\n\nreq.body:\n");
    console.log(req.body);

    console.log("\n\nreq.cookies:\n");
    console.log(req.cookies);

    console.log("\n\nreq.fresh:\n");
    console.log(req.fresh);

    console.log("\n\nreq.hostname:\n");
    console.log(req.hostname);

    console.log("\n\nreq.ip:\n");
    console.log(req.ip);

    console.log("\n\nreq.ips:\n");
    console.log(req.ips);

    console.log("\n\nreq.method:\n");
    console.log(req.method);

    console.log("\n\nreq.originalUrl:\n");
    console.log(req.originalUrl);

    console.log("\n\nreq.params:\n");
    console.log(req.params);

    console.log("\n\nreq.path:\n");
    console.log(req.path);

    console.log("\n\nreq.protocol:\n");
    console.log(req.protocol);

    console.log("\n\nreq.query:\n");
    console.log(req.query);

    console.log("\n\nreq.route:\n");
    console.log(req.route);

    console.log("\n\nreq.secure:\n");
    console.log(req.secure);

    console.log("\n\nreq.signedCookies:\n");
    console.log(req.signedCookies);

    console.log("\n\nreq.stale:\n");
    console.log(req.stale);

    console.log("\n\nreq.subdomains:\n");
    console.log(req.subdomains);

    console.log("\n\nreq.xhr:\n");
    console.log(req.xhr);
});
app.listen(4200, () => console.log("listening"));
