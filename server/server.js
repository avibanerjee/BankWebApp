const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require('cors');
const users = require("./users");

var app = express();

//enable CORS (Cross-Origin Resource Sharing)
//may require 'npm install cors'
cors({credentials: true, origin: true});
app.use(cors());
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
//TODO: ADD DB Config

// Routes
app.use("/users", users);

//Renders if react isn't running
app.get('/', function(req, res){
  res.send('React Not Running')
});

const port = process.env.PORT || 8080; 
app.listen(port, () => console.log(`Server up and running on port ${port} !`));

