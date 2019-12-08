const express = require("express");
const login_validate = require("./routes/index.js");
const register = require('./routes/register.js');
const home = require('./routes/home.js');

//const register = require();
const cors = require("cors");
//const logger = require("morgan");

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/login', login_validate);
app.use('/api/register', register);
app.use('/api/home', home);

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
