let express = require("express");
let app = express();
app.get('/', (req, res, next) => {
    res.end("Hello World");
    console.log("\n\nexpression.Router() function: \n"+express.Router());
});
app.listen(4200, () => console.log("listening"));