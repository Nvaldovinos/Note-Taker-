//requires db.json to store note data that is being saved.
// fs is used to store and retrieve notes.
const DbFile = require('../db/db.json');
const fs = require('fs');

module.exports =(app) => {
// reads db.json file and returns all saved notes as JSON.
app.get('/api/notes', (req, res) => res.json(DbFile));

// receives a new note to save on the request body. 
app.post('api/notes', (req, res) => {
    
})

// receives a query parameter containing the id of a note to delete. 
};