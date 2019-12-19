const express = require("express");
const db = require('../db');
const router  = express.Router();


router.get('/', async (req, res, next)=>{

    const {block, email} = req.query;
    console.log(block, email);
    try{
        await db.JoinBlock(email, block);
        
    }catch(e){

        console.log(e);
        res.sendStatus(500);
    }

});


module.exports = router;