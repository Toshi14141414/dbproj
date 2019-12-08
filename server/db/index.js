const mysql = require("mysql");

const conn = mysql.createPool({
  connectionLimit: 10,
  host: "127.0.0.1",
  user: "root",
  password: "password",
  database: "PROJECT1"
});

let db = {};

db.all = () => {
  return new Promise((resolve, reject) => {
    conn.query(`SELECT * FROM USERS;`, (err, results) => {
      if (err) {
        return reject(err);
      }

      return resolve(results);
    });
  });
};

db.validateUsers = (email, password) => {
  return new Promise((resolve, reject) => {
    console.log("database calling....", email, password);
    conn.query(
      `SELECT ValidateUser(?, ?) AS result`,
      [email, password],
      (err, results) => {
        if (err) {
          return reject(err);
        }

        return resolve(results);
      }
    );
  });
};

module.exports = db;
