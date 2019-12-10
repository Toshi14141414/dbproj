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
  const { thread, user, reply } = req.query;
  console.log(thread);

  try {
    await db.replyToThread(thread, user, reply);

    let thread_info = await db.getThreadInfo(thread);
    let messages = await db.getMessageFromThread(thread);

    var thread_string = JSON.stringify(thread_info);
    var thread_json = JSON.parse(thread_string)[0][0];
    var msg_string = JSON.stringify(messages);
    var msg_array = JSON.parse(msg_string)[0];
    var msg_json = { messages: msg_array };

    var result_json = jsonConcat({ thread: thread_json }, msg_json);
    console.log(result_json);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
  res.send(result_json);
});

module.exports = router;
