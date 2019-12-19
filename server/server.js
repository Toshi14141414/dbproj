const express = require("express");
const login_validate = require("./routes/index.js");
const register = require('./routes/register.js');
const home_info = require('./routes/home.js');
const post_info = require('./routes/post');
const reply = require('./routes/reply');
const addfeed = require('./routes/addfeed');
const news = require('./routes/news');
const selectBlock = require('./routes/selectBlock');
const sendMessage = require('./routes/sendMessage');
const editProfile = require('./routes/editProfile');
const search = require('./routes/search');
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/home', home_info);
app.use('/api/login', login_validate);
app.use('/api/register', register);
app.use('/api/post', post_info);
app.use('/api/reply', reply);
app.use('/api/addfeed', addfeed);
app.use('/api/news', news);
app.use('/api/join/block', selectBlock);
app.use('/api/send', sendMessage);
app.use('/api/edit/', editProfile);
app.use('/api/search', search);

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
