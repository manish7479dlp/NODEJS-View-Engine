const express = require("express")
const path = require("path")

const app = express();
const staticPath = path.join(__dirname , "./public")
// console.log(staticPath);
const port = 8000;

app.use(express.static(staticPath)); // buid in middleware..

app.get("/" , (req , res) => {
    res.send("hlw from the other side..")
})

app.listen(port , () => {
    console.log(`Connection Successful on port number ${port}`);
})