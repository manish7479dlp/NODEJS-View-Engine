const express = require("express")
const path = require("path")
const hbs = require("hbs");

const app = express();
const staticPath = path.join(__dirname , "./public");
const templatePath = path.join(__dirname , "./template/views");
const partialsPath = path.join(__dirname , "./template/partials");

const port = 8000;

// to set the view engine
app.set("view engine" , "hbs");

// to change views name.
app.set("views" , templatePath)

// to set partials.
hbs.registerPartials(partialsPath);

// template engine route..

app.get("/" , (req , res) => {
    res.render("index" , {
        name : "Manish Kumar"
    })
})

app.get("/about" , (req , res) => {
    res.render("about");
})

// normal route
app.get("/" , (req , res) => {
    res.send("hlw from the other side..")
})

app.get("/about*" , (req , res) => {
    res.send("page not found...876")
})

app.get("*" , (req , res) => {
    res.render("404" , {
        errorComment: "404 Page not found.."
    });
})

app.listen(port , () => {
    console.log(`Connection Successful on port number ${port}`);
})