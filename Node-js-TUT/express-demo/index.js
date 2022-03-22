const express = require("express");
const app = express();
app.get("/", (req, res) => {
    res.send("Hello Word!!!!!");

});
app.get("/api", (req, res) => {
    res.send([1, 5, 5])

});
//port
const port = process.env.port || 3000
app.listen(port, () => console.log(`Lisnning on the port ${port}..`))