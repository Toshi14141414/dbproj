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
        }
       
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }

});


module.exports = router;