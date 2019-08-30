var mysql      = require('mysql');
module.exports = () => {
  return mysql.createConnection({
    host     : 'localhost',
    user     : 'alex',
    password : 'alex',
    database : 'visibilidad'
  });
}

