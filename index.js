//importing the express framework
const express = require("express");
const dbConnect = require("./config/dbConnect");

//creating an instance of the express application
const app = express();

//defining the port where the application will run
const port = 5000;

//database connection
dbConnect();

//accepting json data
app.use(express.json());


//setting up the server to listen on the port
app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
});

//demo root directory route
app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/api/user/register", require("./route/userRoute"));