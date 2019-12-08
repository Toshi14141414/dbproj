const express = require("express");
const db = require('../db');
const router  = express.Router();

router.get('/', async (req, res, next)=>{
    console.log(req.query);
    const {email, firstName, lastName, address,sex, apt, city, state, zip, password } = req.query;
    try{

        let results = await db.registerNewUser(email, firstName, lastName, sex, address, apt, city, state, zip, password);
        //console.log("create user successfully");
        console.log(results);
        res.json(results);
        
    }catch(e){
        //console.log("unable to create user");
        console.log(results);
        //console.log(e);
        res.sendStatus(500);
    }

});


module.exports = router;