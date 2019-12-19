const express = require("express");
const db = require("../db");
const router = express.Router();

router.get("/", async (req, res, next) => {
  const { user, receiver } = req.query;
  console.log(user, receiver);

  try {
    let result = await db.isFriend(user, receiver);
    await db.sendFriendRequest(user, receiver);
    res.json(result);

  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = router;
