const express = require("express");
const db = require('../db');
const router  = express.Router();

router.get('/', async (req, res, next)=>{

    const {email, password} = req.query;
    console.log(email, password);

    try{
        let results = await db.validateUsers(email, password);
        res.json(results);
        
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }

});


module.exports = router;