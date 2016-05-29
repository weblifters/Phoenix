const oracledb    = require('oracledb');
const credentials = require('../credentials.js');

exports.getSampleStudents = function(cb) {
  oracledb.getConnection({
    user          : credentials.user,
    password      : credentials.password,
    connectString : credentials.connectString
  },
  function(err, connection) {
    if (err) { console.error(err.message); return; }
    connection.execute(
      'SELECT FIRST_NAME, LAST_NAME, MAILING_STATE FROM STUDENTS',
      function(err, result) {
        if (err) {console.error(err.message); return; }
        cb(result);
        doRelease(connection);
      });

  });
  function doRelease(connection) {
    connection.release(
      function(err) {
        if (err) {
          console.error(err.message);
        }
      });
  }
}

exports.customSqlQuery = function(sqlQuery, cb) {
  //There is an edge case where arrays of arrays are returned
  //SELECT * FROM STUDENTS (for example)
  //I should flatten the response before sending it to the client
  oracledb.getConnection({
    user          : credentials.user,
    password      : credentials.password,
    connectString : credentials.connectString
  },
  function(err, connection) {
    if (err) { console.error(err.message); return; }
    connection.execute(
      sqlQuery,
      function(err, result) {
        if (err) {console.error(err.message); return; }
        cb(result);
        doRelease(connection);
      });

  });
  function doRelease(connection) {
    connection.release(
      function(err) {
        if (err) {
          console.error(err.message);
        }
      });
  }
}
