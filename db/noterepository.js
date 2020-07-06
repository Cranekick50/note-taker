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
            return jsonnnotes
        })
    }
    addnote(note) {
        // return writefileasync("db/db.json", "utf8").then(function(notes){
        //     let jsonnotes;
        //     try {
        //         jsonnotes=[].concat(JSON.parse(notes))
        //     }catch {
        //         jsonnotes=[];
        //     }
        //     return jsonnnotes
        // })
    }
    deletenote(id) {
        // return readfileasync("db/db.json", "utf8").then(function(notes){
        //     let jsonnotes;
        //     try {
        //         jsonnotes=[].concat(JSON.parse(notes))
        //     }catch {
        //         jsonnotes=[];
        //     }
        //     return jsonnnotes
        // })
    }
}
module.exports = new Repository();