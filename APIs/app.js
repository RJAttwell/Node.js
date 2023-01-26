const express = require("express");
//Do not have to install this using node as it's one of the native node modules
//Allows us to make a GET request across the internet to an external server
const https = require("https");


const app = express();


app.get("/", function(req, res){

    const url = "";
    //Use a callback function
    https.get(url, function(){
        console.log(response);
    });

    res.send("Server is up and running")
})


app.listen(3000, function(){
    console.log("Server is running on port 3000.");
})