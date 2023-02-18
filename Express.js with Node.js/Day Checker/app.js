//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express ();

//Must set the app in order to use EJS
//Must have it exactly how it is below and in the position it is in in the code.
app.use('view engine', 'ejs');

app.get("/", function(req, res){

    var today = new Date(); //creates a date object with the current date and time
    var currentDay = today.getDay();

    if(currentDay === 6 || currentDay === 0){ //returns the day of the week (0 to 6) of a date.
        res.sendFile(__dirname + "/weekend.html")
    }else{
       res.sendFile(__dirname + "/weekday.html");
    }


});

app.listen(3000, function(){
    console.log("Server is now running on port 3000");
});