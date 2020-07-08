var router = require("express").Router();
var repository = require ("../db/noterepository")




//url: "/api/notes",
// method: "GET",
router.get("/notes", function (req, res){
    repository.getnotes()
    .then(function(notes){
        res.json(notes);
    })
    .catch((err)=> res.status(500).json(err))
    
})
// url: "/api/notes",
// data: note,
// method: "POST",
router.post("/notes", function (req, res){
    var note = req.body;
    repository.addnote(note)
    .then(function(notes){
    res.json(notes);
});
})
// url: "api/notes/" + id,
// method: "DELETE",
router.delete("/notes/:id", function (req, res){
    var id = req.params.id;
    console.log(id)
    repository.deletenote(id)
    .then(function(){
    res.json({ok:true})
});
})

module.exports = router;