const util = require("util")
const fs = require("fs")
const uuidv1 = require("uuid/v1")

const readfileasync = util.promisify(fs.readFile)
const writefileasync = util.promisify(fs.writeFile)


class Repository {
    getnotes(){
        return readfileasync("db/db.json", "utf8").then(function(notes){
            let jsonnotes;
            try {
                jsonnotes=[].concat(JSON.parse(notes))
            }catch {
                jsonnotes=[];
            }
            return jsonnotes
        })
    }
    addnote(note) {
        const title = note.title;
        const text = note.text;
        const newnote = {title,text,id:uuidv1()}
        return this.getnotes()
        .then((notes)=> [...notes,newnote])
        .then((changedNotes)=> writefileasync("db/db.json", JSON.stringify(changedNotes)))
        .then(()=>newnote);
    }
    deletenote(id) {
        return this.getnotes()
        .then((notes)=> notes.filter((note)=> note.id !== id))
        .then((filterednotes)=>writefileasync("db/db.json", JSON.stringify(filterednotes)))
    }
}
module.exports = new Repository();