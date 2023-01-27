const express = require("express");
//Do not have to install this using node as it's one of the native node modules
//Allows us to make a GET request across the internet to an external server
const https = require("https");


const app = express();


app.get("/", function(req, res){

    //Must have the https://
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Dublin&lat=44.34&lon=10.99&units=metric&appid=";
   

    //Use a callback function
    https.get(url, function(response){
        //Can log the status code associated with the response. Should hopefully be 200
        console.log(response.statusCode);

        response.on("data", function(data){
            //Will provide hexidecimal data
            //console.log(data)

            //Convert data into Javascript object
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp

            //Challenge to print the weather description
            const weatherDescription = weatherData.weather[0].description
            res.send("The temperature in London is " + temp + " degrees Celcius.");
            //Can only have one res.send in any given app method



            //Can also convert Javascript object into a string
            // const object = {
            //     name: "Richard",
            //     favouriteFood: "General Tso's Chicken"
            // };

            //console.log(JSON.stringify(object));
        })
    });

})


app.listen(3000, function(){
    console.log("Server is running on port 3000.");
})