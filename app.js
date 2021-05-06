const express = require("express");
const http = require("http");
const vodyParser = require("body-parser");

const app = express();

app.use(express.urlencoded({
    extended: true
}))

app.listen(3000, function(){
    console.log("server is started");
})