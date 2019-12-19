const express = require("express");
const db = require('../db');
const router  = express.Router();

router.get('/', async (req, res, next)=>{
    console.log('here');
    console.log(req.query);
    const {email, firstName, lastName, sex, latitude, longitude,password } = req.query;
    try{
        let results = await db.registerNewUser(email, firstName, lastName, sex, "", latitude, longitude, password);
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