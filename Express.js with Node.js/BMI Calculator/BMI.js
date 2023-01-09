//1. npm init in the hyper terminal 
//2. npm install express
//3. npm install nodemon

const { response } = require("express");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(request, response){
    response.sendFile(__dirname + "/BMIcalculator.html");

});

app.post("/", function(req, res){

    var height = parseFloat(req.body.height);
    var weight = parseFloat(req.body.weight);

    var result = weight/Math.pow(height, 2);
    
    res.send("Your BMI is " + result);
});

app.listen(3000, function(){
    console.log("Server is now running on Port 3000");
});