const express = require("express")
const path = require("path")

const app = express();
const staticPath = path.join(__dirname , "./public");
const templatePath = path.join(__dirname , "./template");
console.log(templatePath);
const port = 8000;

// to set the view engine
app.set("view engine" , "hbs");

// to change views name.
app.set("views" , templatePath)

// template engine route..

app.get("/" , (req , res) => {
    res.render("index" , {
        name : "Manish Kumar"
    })
})

// normal route
app.get("/" , (req , res) => {
    res.send("hlw from the other side..")
})

app.listen(port , () => {
    console.log(`Connection Successful on port number ${port}`);
})