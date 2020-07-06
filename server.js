// Dependencies
// =============================================================
var express = require("express");
var htmlroutes = require ("./routes/htmlroutes");
var apiroutes = require ("./routes/apiroutes");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));




app.use("/api", apiroutes);
app.use("/", htmlroutes);


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });