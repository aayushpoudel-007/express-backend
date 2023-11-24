//importing the express framework
const express = require("express");

//creating an instance of the express application
const app = express();

//defining the port where the application will run
const port = 5000;

//setting up the server to listen on the port
app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
});

