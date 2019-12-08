const express = require("express");
const apiRouter = require('./routes');

const app = express();

app.use(express.json());
app.use('/api/chirps', apiRouter);


const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
