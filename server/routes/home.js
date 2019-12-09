const express = require("express");
const db = require('../db');
const router  = express.Router();

function jsonConcat(o1, o2) {
    for (var key in o2) {
     o1[key] = o2[key];
    }
    return o1;
}

router.get('/', async (req, res, next)=>{

    const {email} = req.query;
    console.log(email);

    try{

        let user_profile    = await db.getUserProfile(email);
        let current_block   = await db.getCurrentBlock(email);
        let current_hood    = await db.getCurrentHood(email);
        let has_unread_msg  = await db.hasUnreadRequests(email);
        let user_feed_all   = await db.getAllFeeds(email);
        var user_profile_string = JSON.stringify(user_profile);
        var user_profile_json   = JSON.parse(user_profile_string)[0][0];
        console.log("profile json", user_profile_json);
        
        var block_string = JSON.stringify(current_block);
        var block_json = JSON.parse(block_string)[0];
        console.log("block json", block_json);

        var hood_string = JSON.stringify(current_hood);
        var hood_json = JSON.parse(hood_string)[0];
        console.log("hood json", hood_json);

        var unreadMSG_string = JSON.stringify(has_unread_msg);
        var unreadMSG_json = JSON.parse(unreadMSG_string)[0];
        console.log("msg json", unreadMSG_json);

        var allFeed_string = JSON.stringify(user_feed_all);
        var allFeed_array   = JSON.parse(allFeed_string)[0];
        var allFeed_json = {allFeeds:allFeed_array};
        console.log("allFeed array", allFeed_array);
        console.log("allFeed_json", allFeed_json);

        const result = jsonConcat(user_profile_json, jsonConcat(block_json, jsonConcat(unreadMSG_json, allFeed_json)));
        console.log(result);
        res.send(result);
        
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }

});


module.exports = router;