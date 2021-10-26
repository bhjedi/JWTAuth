const express = require("express");
const app = express();
require('dotenv').config();
app.use(express.json());

const jwt = require('jsonwebtoken'); 

const posts=[{name:'mehdi',title:'post1'}];


app.get('/post',authentificateToken, (req,res)=>{
     res.json(posts.filter(e=>e.username === user.name));
    console.log(posts);
})




function authentificateToken(req,res,next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token==null) res.sendStatus(401);
    jwt.verify(token, process.env.ACCES_TOKEN_SECRET,(err,user)=>{
        if(err) res.sendStatus(403);
        req.user = user ; 
        next();
    })
}
app.listen(4000);