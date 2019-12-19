const express = require("express");
const db = require("../db");
const router = express.Router();

router.get("/", async (req, res, next) => {
  const { email, keyword } = req.query;
  console.log(email, keyword);

  try {
    let search_result = await db.SearchMessageWith(email, keyword);
    var search_result_string = JSON.stringify(search_result);
    var search_result_json = JSON.parse(search_result_string)[0];
    console.log(search_result_json);
    res.send({ results: search_result_json });
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = router;
