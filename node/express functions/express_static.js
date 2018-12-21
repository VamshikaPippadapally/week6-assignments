let express = require("express");
let app = express();
app.get('/', (req, res, next) => {
    res.end("Hello World");
    console.log("\n\nexpression.static() function: \n"+express.static("public"));
});
app.listen(4200, () => console.log("listening"));