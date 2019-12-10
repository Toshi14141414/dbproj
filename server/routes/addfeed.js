const express = require("express");
const db = require("../db");
const router = express.Router();

function jsonConcat(o1, o2) {
  for (var key in o2) {
    o1[key] = o2[key];
  }
  return o1;
}

router.get("/", async (req, res, next) => {


/*fetch(
      `/api/addfeed?title=${this.state.addFeedTitle}&type=${this.state.addFeedType}&email=${this.state.userEmail}&body=${this.state.addFeedBody}`
    )
      */
  const { title, type, email, body } = req.query;
  console.log(req.query);

  try {
    await db.StartMessageIn(email, type, title, body);
    res.send({result:1});
  } catch (e) {
    console.log(e);
    res.send({result:-1});
    res.sendStatus(500);
  }
  //res.send(result_json);
});

module.exports = router;
