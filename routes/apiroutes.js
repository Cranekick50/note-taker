var router = require("express").Router();
var repository = require ("../db/noterepository")



module.exports = function(app) {
//url: "/api/notes",
// method: "GET",
router.get("/api/notes", function (req, res){
    repository.getnotes()
    .then(function(notes){
        res.json(notes);
    })
    
})
// url: "/api/notes",
// data: note,
// method: "POST",
router.post("/api/notes", function (req, res){
    var note = req.body;
    repository.savenote(note)
    .then(function(notes){
    res.json(notes);
});
})
// url: "api/notes/" + id,
// method: "DELETE",
router.delete("/api/notes:id", function (req, res){
    var id = req.params.id;
    repository.deletenote(id)
    .then(function(notes){
    res.json(notes);
});
})

};