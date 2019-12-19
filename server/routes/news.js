const express = require("express");
const db = require("../db");
const router = express.Router();

function jsonConcat(o1, o2) {
  for (var key in o2) {
    o1[key] = o2[key];
  }
  return o1;
}

router.get("/block/back/", async (req, res, next) => {
  const { user, sender,  target, time, type } = req.query;
  console.log(user, sender, target, time, type);
  
  var req_time = "".concat(time.substring(0, 10),' ',time.substring(11, 19));
  console.log(req_time);

  try {
    await db.respondToJoinBlock(user, sender, target, req_time, type);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }

});

router.get("/friend/back/", async (req, res, next) => {
  const { user, sender, type } = req.query;
  console.log(user, sender, type);

  try {

    await db.respondToFriendRequest(user, sender, type);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }

});

router.get("/", async (req, res, next) => {
  const { email } = req.query;
  try {

    // let news_info = await db.listAllNews(email);
    // var news_string = JSON.stringify(news_info);
    // var news_json = JSON.parse(news_string)[0];

    let friend_news = await db.listAllFriendRequests(email);
    var friend_new_string = JSON.stringify(friend_news);
    var friend_new_json = JSON.parse(friend_new_string)[0];

    let block_news = await db.listAllBlockRequests(email);
    var block_new_string = JSON.stringify(block_news);
    var block_new_json = JSON.parse(block_new_string)[0];

    console.log(friend_new_json);
    console.log(block_new_json);
    //console.log(news_json);
    res.send({friend: friend_new_json,block:  block_new_json});

  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }

});

module.exports = router;
