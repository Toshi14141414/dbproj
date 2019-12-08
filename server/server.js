const express = require("express");
const apiRouter = require('./routes');
const cors = require('cors');
const logger = require('morgan');

const app = express();
app.use(express.json());
app.use(cors());
//app.use('/api/login', apiRouter);

app.get('/api/login', (req, res)=>{
    const {email, password} = req.query;
    console.log(email, password);
    //res.send(`log in`);
    //    name, pword
    // };
    res.send(req.query);
    //res.send(`log in`);
});

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