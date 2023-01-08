//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

//Function that represents express module
const app = express(); 
//Use urlencoded to parse data that comes from an HTML form 
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(request, response){   //The / represents the root of our website
    response.sendFile(__dirname +"/index.html");   //Gives you the file path no matter where it is stored (Cloud, your PC, someone else's PC, remote server)
})  

//Server does not have any way to process post requests without the below code
//Not accepting anyone to post to our home route. We have to put:
app.post("/", function(req, res){

    //Must have Number() so we are not appending num1 to num2 and are instead adding it
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.send("The result of the calculation is " + result);
})

app.listen(3000, function(){
    console.log("Server started on port 3000")
});


//HTTP return codes:
//1** - Hold on (Something is going to happen)
//2** - Here you go (Successful return)
//3** - Go away (Security issue)
//4** - Client Error (Issue on user end)
//5** - We screwed up (Issue on server end)

//Installed npm package body-parser so we can parse data from post request into properties/variables

//If you use view source in the browser you can see the code that the browser sees and it's just the HTML code, not the Javascript which is run on the server
//We now have a web application since Javascript is being run on the backend