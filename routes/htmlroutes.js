// Dependencies
// =============================================================
var router = require("express").Router();
var path = require("path");


module.exports = function(app) {

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

app.get("*", function(req, res) {
    //investigate
    console.log("User hit ")
    res.sendFile(path.join(__dirname, "../public/index.html"));
    
  });

};