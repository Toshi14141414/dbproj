const mysql = require("mysql");

const conn = mysql.createPool({
  connectionLimit: 10,
  host: "127.0.0.1",
  user: "root",
  password: "password",
  database: "PROJECT1"
});

let db = {};

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

db.registerNewUser = (email, firstName, lastName, gender,address, apt, city, state, zip, password)=>{
    return new Promise((resolve, reject) => {
        conn.query(`call CreateAccount(?, ?, ?, ?, ?)`, [email, firstName, lastName, gender, password], (err_1, results_1) => {
            if (err_1) {
              const return_result= {result: 0};
              return resolve(return_result);
            }
            else{
                conn.query(`call EnterAddress(?, ?, ?, ?, ?)`, [email, apt, address, city, state ], (err_2, results_2)=>{
                      if (err_2){

                          const return_result= {result: 0};
                          return resolve(return_result);
                          //return "invalid address";
                      }
                      else{
                          const return_result= {result: 1};
                          return resolve(return_result);
                      }
                });
               
            }
            
          }
        );
      });
}


/*
Get Profile
Get Threads
*/



module.exports = db;
