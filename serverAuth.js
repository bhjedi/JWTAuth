const express = require("express");
const app = express();
require('dotenv').config();
app.use(express.json());

const jwt = require('jsonwebtoken'); 





app.post('/user', (req,res)=>{
    //authentificate User
    const username = req.body.username;
    const user = {name:username};
   const accesToken =  generateAccessToken(user);

   const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
   res.json({accesToken:accesToken,  refreshToken:refreshToken} );
})


function generateAccessToken(user){
    return jwt.sign(user,process.env.ACCES_TOKEN_SECRET,{expireIn:'15s'})

}
app.listen(4300);