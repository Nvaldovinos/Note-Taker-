const require = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Rm55ilyuh@',
    database: 'notesDB',
  });

  const afterConnection = () => {
    connection.query('SELECT * FROM products', (err, res) => {
      if (err) throw err;
      console.log(res);
      connection.end();
    });
  };
  
  connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    afterConnection();
  });
  