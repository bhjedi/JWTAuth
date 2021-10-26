const express = require("express");
const app = express();
const bcrypt = require('bcrypt');


app.use(express.json());


const users = [];    
app.get('/user', (req,res)=>{
    res.send(users);
})

app.post('/user',async(req,res)=>{
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(req.body.password,salt);
        const user = {name:req.body.name , password:hashedpassword}
        users.push(user);
        res.status(201).send();
    }
    catch{
        res.status(500).send();

    }
    
})

app.listen(3000);