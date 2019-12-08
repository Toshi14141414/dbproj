const express = require("express");
const apiRouter = require("./routes");
const cors = require("cors");
const logger = require("morgan");

const app = express();
app.use(express.json());
app.use(cors());
//app.use('/api/login', apiRouter);

app.get("/api/login", (req, res) => {
  const { email, password } = req.query;
  console.log(req.query);
  // //res.send(`log in`);
  // //    name, pword
  // // };
  res.send(req.query);
  // //res.send(`log in`);
  //   res.json();
  //   try {
  //     // get data from database
  //     //   let data =  db.get();
  //     res.json();
  //   } catch (err) {
  //     res.status(500).send({ msg: "server error" });
  //   }
});

app.post("/api/login", (req, res) => {
  // convert req.body's data to db format
  //   try {
  //     // 1. find duplicated email
  //     // if find res.send('User exists')
  //     const { email, password } = req.query;
  //     console.log(req.query);
  //     res.send(req.query);
  //   } catch (err) {
  //     res.status(500).send({ msg: err.message });
  //   }
});

// 1. express-validator // check if valid input fields
// 2. json web token
// token
// localStorage

const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));

// app.use(
//     cors({
//       origin: 'http://localhost:3000',
//       credentials: true,
//     })
//   );

//   app.use(logger('dev'));
//   app.use(express.json());
//   app.use(express.urlencoded({ extended: false }));
