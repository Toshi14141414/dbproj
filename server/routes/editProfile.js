const express = require("express");
const db = require('../db');
const router  = express.Router();

router.get('/block', async (req, res, next)=>{

    const {email, latitude, longitude, apt, bid} = req.query;
    console.log(email, latitude, longitude,apt, bid);

    try{

        if (bid >0){
            await db.leaveBlock(email, bid);
            await db.EnterAddress(email, apt, latitude, longitude);

            let nearBlocks = await db.listNearBlocks(email, latitude, longitude);
            var nearBlock_string = JSON.stringify(nearBlocks);
            var nearBlock_json = JSON.parse(nearBlock_string)[0];
            var result = {suggested_blocks : nearBlock_json};
            console.log(result);
            res.send(result);
        }
       
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }

});


module.exports = router;