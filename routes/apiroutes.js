var router = require("express").Router();
var repository = require ("../db/noterepository")

//url: "/api/notes",
// method: "GET",
router.get("/notes", function (req, res){
    repository.getnotes()
    .then(function(notes){
        res.json(notes);
    })
    
})
// url: "/api/notes",
// data: note,
// method: "POST",
router.post("/notes", function (req, res){
    var note = req.body;
    repository.push(note);
    res.json();
})
// url: "api/notes/" + id,
// method: "DELETE",
router.delete("/notes:id", function (req, res){
    var id = req.params.id;
    repository.deletenote(id);
    res.json();
})