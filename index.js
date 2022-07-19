//Node.js:
//Framework which allows us to use JavaScript to create a back-end
//Fast and allows us to build a fast and scaleable websites

//Pure JavaScript cannot go beyond the boundry of the website 
//Cannot access User's file system 

//If you want to create a desktop application, you need to write code
//that interacts with the computer/file system. Need to write code that directly interacts
//independent of the browser and that is what Node.js allows us to do.

//Node.js allows us to use Javascript to interact directly with hardware of PC.
//Editors like Atom are based on Node.js.

//Can run Javascript code on a server/PC
//Ex: Google. A query inputed into Google search engine will get sent to Google servers.
//JavaScript code run on google servers to process request and send the result back to user.
//Get their web browser to display the information

//Command Line:

//pwd = print working directory - Prints what directory we are in currently

//Interact with user's local file system using node

const fs = require('fs');      
//const stands for constant and you cannot change the value it's assigned, unlike variable.
//const is only available in ES6

//fs stands for file system. Can name the const whatever but for simplicity, I will use fs

//TO COPY A FILE:
//fs.copyFileSync("source, destination")
//source is the file to copy and destination is where to copy to
fs.copyFileSync("file1.txt", "file2.txt");

//Will look in folder for file1.txt and copy to file2.txt
//If file2.txt already existed, this would replace the content inside it with the content inside file1

//EXTERNAL NODE MODULES: 
//NPM - Node Packet Manager for external modules 
//The packages are bits of reusable code that someone else wrote
//Can incorporate these packages into your own projects
//NPM comes with the node install

//Initialise npm by typing "npm init" in hyper terminal
//entry point is main javascript file used
//Go through all the queries and then a package.json file will be created with all the information inputed
//All external packages installed will show in this file 




