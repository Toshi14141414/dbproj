const express = require("express");

const app = express();

app.get("/api/customers", (req, res) => {
  const customers = [
    {
      id: 1,
      firstName: `shabby`,
      lastName: `Doe`
    },
    {
      id: 2,
      firstName: `s`,
      lastName: `Smith`
    },
    {
      id: 3,
      firstName: `sby`,
      lastName: `De`
    }
  ];

  res.json(customers);
});

var cors = require("cors");
app.use(cors());

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));



