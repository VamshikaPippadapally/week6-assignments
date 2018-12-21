let express = require("express");
let app = express();
app.get('/', (req, res, next) => {
    res.end("Hello World");
    console.log("expression.json() function: \n"+express.json());
});
app.listen(4200, () => console.log("listening"));