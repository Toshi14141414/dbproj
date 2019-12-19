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
    //console.log('here');
    console.log(req.query);
    const {email, firstName, lastName, sex, latitude, longitude,password } = req.query;
    try{
        let results = await db.registerNewUser(email, firstName, lastName, sex, "", latitude, longitude, password);

        let nearBlocks = await db.listNearBlocks(email, latitude, longitude);
        var nearBlock_string = JSON.stringify(nearBlocks);
        var nearBlock_json = JSON.parse(nearBlock_string)[0];
        //console.log("block json", nearBlock_json);
        console.log(jsonConcat(results, {suggested_blocks : nearBlock_json}));
        res.json(results);
        
    }catch(e){
        //console.log("unable to create user");
        //console.log(results);
        console.log(e);
        res.sendStatus(500);
    }

});


module.exports = router;