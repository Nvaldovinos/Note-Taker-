//requires db.json to store note data that is being saved.
// fs is used to store and retrieve notes.
const DbFile = require("../db/db.json");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
// const router = require('express').Router();


// router.post('api/notes', (req, res) =>{
//     DbFile.push(req.body);
//     res.json(true);
//     req.body.id = uuidv4();

//     //Writes to the database file db.json
//     fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(DbFile), 
//     function (err){
//         if (err) throw (err);
//         res.json(true)
//     });
//   });


module.exports = (app) => {
  // reads db.json file and returns all saved notes as JSON.
  app.get("/api/notes", (req, res) => res.json(DbFile));

  // receives a new note to save on the request body.
  app.post("api/notes", (req, res) => {
    DbFile.push(req.body);
    res.json(true);

    req.body.id = uuidv4();

    //Writes to the database file db.json
    fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(DbFile), 
    function (err){
        if (err) throw (err);
        res.json(true)
    });
  });

  // receives a query parameter containing the id of a note to delete.
};
