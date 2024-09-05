const express = require('express');
const fs = require('fs');
const users = require('../../MOCK_DATA (2).json');
const router = express.Router();
const { validator, idSchema, userSchema } = require('../controllers/usercontrollers');



//GET --REQUESTS
router.get('/users',(req,res)=>{
    return res.json(users)
})

router.get('/users/:id', validator.params(idSchema),(req,res)=>{
    const id = Number(req.params.id)
    const user = users.find((user)=>user.id===id)
    return res.json(user)
})

//POST --REQUESTS
router.post('/users',validator.body(userSchema),(req,res)=>{
    //todo
    const body = req.body;
    console.log("Body",body);
if(!body || !body.first_name ||!body.last_name || !body.email  || !body.gender || !body.university ){
    return res.status(400).json({msg: "all feilds are required "});
}
users.push({...body,id:users.length+1});
fs.writeFile('./MOCK_DATA (2).json',JSON.stringify(users),(err,data)=>
{
    return res.sendStatus(201).json({status:"success",id:users.length})
})
})

//DELETE --Requests
router.delete('/users/:id',validator.params(idSchema),(req,res)=>{
const id =Number(req.params.id)
const user = users.findIndex((user)=>user.id===id);
users.splice(user,1);
fs.writeFile('./MOCK_DATA (1).json',JSON.stringify(users),(err,data)=>
    {
        return res.sendStatus(202).json({status:"success",message:"user deleted succesfully"})
    })
})

module.exports = router;

        




