const express = require("express");
const db = require('../db');
const router  = express.Router();

router.get('/friend/message', async (req, res, next)=>{
   
    const {sender, receiver, title, content} = req.query;
    console.log(sender, receiver, title, content);

    try{
        await db.StartMessageWith (sender, receiver, 'Friend', title, content);
        //res.json(results);
        
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }

});

router.get('/neighbor/message', async (req, res, next)=>{
   
    const {sender, receiver, title, content} = req.query;
    console.log(sender, receiver, title, content);

    try{
        await db.StartMessageWith (sender, receiver, 'Neighbour', title, content);
        //res.json(results);
        
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }

});

module.exports = router;