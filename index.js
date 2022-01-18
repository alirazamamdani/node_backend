const express = require("express");
const Product = require("./routes/product")
const app = express();
const PORT = process.env.PORT || 5000;


app.get("/demo", (req , res) => {
        res.send("Hello")
} )
app.get("/", (req, res) => {res.send("hello this is main page")})
app.use("/product" , Product)

app.listen(PORT, () => console.log(`server is running ${PORT}`) )
