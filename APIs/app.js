const { response } = require("express");
const express = require("express");
//Do not have to install this using node as it's one of the native node modules
//Allows us to make a GET request across the internet to an external server
const https = require("https");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function (req, res) {

    res.sendFile(__dirname + "/index.html")

});

app.post("/", function (req, res) {

    const query = req.body.cityName;
    const apiKey = "secret";
    const unit = "metric";

    //Must have the https://
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit;


    //Use a callback function
    https.get(url, function (response) {
        //Can log the status code associated with the response. Should hopefully be 200
        console.log(response.statusCode);

        response.on("data", function (data) {
            //Will provide hexidecimal data
            //console.log(data)

            //Convert data into Javascript object
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp

            //Challenge to print the weather description
            const weatherDescription = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon
            const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
            //Can write HTML inside the Javascript file
            //Use res.write to send multiple lines
            res.write("<p>The weather is currently " + weatherDescription + "</p>")
            res.write("<h1>The temperature in " + query + " is " + temp + " degrees Celcius.</h1>");
            res.write("<img src=" + imageURL + ">")
            res.send()
            //Can only have one res.send in any given app method
        });
    });
});




//         //Can also convert Javascript object into a string
//         // const object = {
//         //     name: "Richard",
//         //     favouriteFood: "General Tso's Chicken"
//         // };

//         //console.log(JSON.stringify(object));
//     })
// });


app.listen(3000, function () {
    console.log("Server is running on port 3000.");
});