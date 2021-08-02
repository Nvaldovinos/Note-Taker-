const express = require('express');
const app = express();

//Sets initial port. 
const PORT = process.env.PORT || 3550;
// const path = require('path');

// Express app is set to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

//points our sever to a series of route files.

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

//starts our server and allwos a link to the port 

app.listen(PORT, () => {
    console.log(`App listening on port: localhost:${PORT}`);
})