// Dependen
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3002;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Data

var tables = [
    {
      name: "Hector",
      id: 4,
    },
    {
      name: "Mo",
      id: 3,
    },


];

// Routes

// Home page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });

  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });

  app.get("/view.html", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });

  app.get("/reserve.html", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });

  app.get("/api/tables", function(req, res) {
    return res.json(tables);
  });

  
app.get("/api/tables/:tables", function(req, res) {
    var chosen = req.params.tables;
  
    console.log(chosen);
  
    for (var i = 0; i < tables.length; i++) {
      if (chosen === tables[i].routeName) {
        return res.json(tables[i]);
      }
    }
  
    return res.json(false);
  });
  
  // Create New tables - takes in JSON input
  app.post("/api/tables", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    
    var newreservation = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    
  
    console.log(newreservation);
  
    tables.push(newreservation);
  
    res.json(newreservation);
  });


// Show info
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });