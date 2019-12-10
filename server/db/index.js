const mysql = require("mysql");

const conn = mysql.createPool({
  connectionLimit: 10,
  host: "127.0.0.1",
  user: "root",
  password: "password",
  database: "PROJECT1"
});

let db = {};

db.replyToThread = (thread, user, reply) =>{
  return new Promise((resolve, reject) => {
    conn.query(
      `call replyToThread(?, ?, ?)`,
      [thread, user, reply],
      (err, results) => {
        if (err) {
          return reject(err);
        }

        return resolve(results);
      }
    );
  });
};

db.getMessageFromThread = (thread_id) =>{
  return new Promise((resolve, reject) => {
    conn.query(
      `call getMessageFromThread(?)`,
      [thread_id],
      (err, results) => {
        if (err) {
          return reject(err);
        }

        return resolve(results);
      }
    );
  });
};

db.getThreadInfo = (thread_id) =>{
  return new Promise((resolve, reject) => {
    conn.query(
      `call getThreadInfo(?)`,
      [thread_id],
      (err, results) => {
        if (err) {
          return reject(err);
        }

        return resolve(results);
      }
    );
  });
};


db.ListAllNeighbours = (email) =>{
  return new Promise((resolve, reject) => {
    conn.query(
      `call ListAllNeighbours(?)`,
      [email],
      (err, results) => {
        if (err) {
          return reject(err);
        }

        return resolve(results);
      }
    );
  });
};


db.ListAllFriends = (email) =>{
  return new Promise((resolve, reject) => {
    conn.query(
      `call ListAllFriends(?)`,
      [email],
      (err, results) => {
        if (err) {
          return reject(err);
        }

        return resolve(results);
      }
    );
  });
};


db.getHoodFeeds = (email) =>{
  return new Promise((resolve, reject) => {
    conn.query(
      `call getHoodFeeds(?)`,
      [email],
      (err, results) => {
        if (err) {
          return reject(err);
        }

        return resolve(results);
      }
    );
  });
};

db.getBlockFeeds = (email) =>{
  return new Promise((resolve, reject) => {
    conn.query(
      `call getBlockFeeds(?)`,
      [email],
      (err, results) => {
        if (err) {
          return reject(err);
        }

        return resolve(results);
      }
    );
  });
};


db.getNeighbourFeeds = (email) =>{
  return new Promise((resolve, reject) => {
    conn.query(
      `call getNeighbourFeeds(?)`,
      [email],
      (err, results) => {
        if (err) {
          return reject(err);
        }

        return resolve(results);
      }
    );
  });
};

db.getFriendFeeds = (email) =>{
  return new Promise((resolve, reject) => {
    conn.query(
      `call getFriendFeeds(?)`,
      [email],
      (err, results) => {
        if (err) {
          return reject(err);
        }

        return resolve(results);
      }
    );
  });
};

db.getAllFeeds = (email) =>{
  return new Promise((resolve, reject) => {
    conn.query(
      `call getAllFeeds(?)`,
      [email],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

db.getUserProfile = (email) =>{
  return new Promise((resolve, reject) => {
    conn.query(
      `call getProfile(?)`,
      [email],
      (err, results) => {
        if (err) {
          return reject(err);
        }

        return resolve(results);
      }
    );
  });
};

db.hasUnreadRequests = (email) =>{
  return new Promise((resolve, reject) => {
    conn.query(
      `SELECT hasUnreadRequest(?) AS hasUnreadMSG`,
      [email],
      (err, results) => {
        if (err) {
          return reject(err);
        }

        return resolve(results);
      }
    );
  });
};

db.getCurrentHood = (email) =>{
  return new Promise((resolve, reject) => {
  //console.log("get current block", email);
    conn.query(
      `SELECT getCurrentHood(?) AS hid`, [email],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

db.getCurrentBlock = (email) =>{
  return new Promise((resolve, reject) => {
  //console.log("get current block", email);
    conn.query(
      `SELECT getCurrentBlock(?) AS bid`, [email],
      (err, results) => {
        if (err) {
          return reject(err);
        }

        return resolve(results);
      }
    );
  });
};

db.validateUsers = (email, password) => {
  return new Promise((resolve, reject) => {
    //console.log("database calling....", email, password);
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


module.exports = db;
