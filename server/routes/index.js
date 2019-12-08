const express = require("express");
const db = require('../db');
const router  = express.Router();

router.get('/', async (req, res, next)=>{
    // try{
    //     let results = await db.all();
    //     res.json(results);
    // }catch(e){
    //     console.log(e);
    //     res.sendStatus(500);
    // }

    // const {name, pword} = req.query;
    // const user_info = {
    //    name, pword
    // };
    // console.log(name, pword);
    // res.send(user_info);
    const {email, password} = req.query;
    console.log(email, password);
    res.send(`log in`);

    //res.json({test:  'test'});
});

// router.get('/api/login', async (req, res, next)=>{
//     res.json({test:  'test'});

//    const {name, pword} = req.query;
//    const user_info = {
//        name, pword
//    };
//    console.log(name, pword);
//    res.send(`log in`);
//});


module.exports = router;