//jshint esversion:6

const express = require("express");
const app = express(); //Function that represents express module

app.get("/", function(request, response){   //The / represents the root of our website
    response.send("<h1>Hello World!</h1>");
})    
//When a request is made to localhost:3000, it triggers the function and a response is made, which we have specified as simply "Hello"

//You can shorten request and response to 'req' and 'res'

app.listen(3000, function(){
    console.log("Server started on port 3000")
}); 
//Listen tells it to listen to a specific port 
//Anonymous function to tell when the server is running or not

//What above is the barebones of a server
//A port is a channel that we tuned our server to 

//Start server with node server.js
//Stop it with CTRL + C

//Our domain, localhost:3000/ is the root/homepage of our website (such as www.google.com)
//When we load up google.com, our browser sends a request to Google's server to get some data for the URL we typed in.
//The response we get back from google will include the HTML, CSS, Javascript, etc. that will display 

