const express = require("express");
const db = require('../db/index.js');
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
        var allFeed_json = {feeds:allFeed_array};
        console.log("allFeed array", allFeed_array);
        console.log("allFeed_json", allFeed_json);

        const result = jsonConcat(user_profile_json, jsonConcat(block_json, jsonConcat(hood_json, jsonConcat(unreadMSG_json, allFeed_json))));
        console.log(result);
        res.send(result);
        
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }

});


router.get('/feed', async (req, res, next)=>{

    const {type, email} = req.query;
    //console.log(type, email);
    var feed_result;
    try{
        if (type=="All"){
            console.log("All");
            feed_result   = await db.getAllFeeds(email);
        }
        else if (type=="Friend"){
            console.log("Friend");
            feed_result   = await db.getFriendFeeds(email);
        }
        else if (type=="Neighbor"){
            console.log("Neighbor");
            feed_result   = await db.getNeighbourFeeds(email);
        }
        else if (type=="Block"){
            console.log("Block");
            feed_result   = await db.getBlockFeeds(email);
        }
        else if (type=="Hood"){
            console.log("Hood");
            feed_result   = await db.getHoodFeeds(email);
        }
        
        var feed_string  = JSON.stringify(feed_result);
        var feed_array   = JSON.parse(feed_string)[0];
        var feed_json    = {feeds:feed_array};
        res.send(feed_json);
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
    
});

router.get('/relation', async (req, res, next)=>{
    const {type, email} = req.query;
    //console.log(type, email);
    try{
        var feed_result;
        if (type=="list_all_neighbors"){
            console.log("list all neighbors");
            feed_result   = await db.ListAllNeighbours(email);
        }
        else if (type=="list_all_friends"){
            console.log("list_all_friends");
            feed_result   = await db.ListAllFriends(email);
        }
        var feed_string  = JSON.stringify(feed_result);
        var feed_array   = JSON.parse(feed_string)[0];
        var feed_json    = {feeds:feed_array};
        res.send(feed_json);
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
    
});

module.exports = router;