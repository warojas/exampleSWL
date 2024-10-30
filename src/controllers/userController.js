const express =  require('express');
const userService = require('../services/userService');

const router = express.Router();

router.get('/', async(req,res)=>{
    const users = await userService.getAllUsers();
    res.json(users);
});

router.get('/:id', async(req, res)=>{
    const user = await userService.getUserById(req.params.id);
    if(user){
        res.json(user);
    }else{
        res.status(404).json({message: 'Ususario no existe'});
    }
});

router.post('/', async(req,res)=>{
    const newUser = await userService.createUser(req.body);
    res.status(201).json(newUser);
});

router.put('/:id', async(req,res)=>{
    const updateUser = await userService.updateUser(re.params.id, req.body);
    if(updateUser){
        res.json(updateUser);
    }else{
        res.status(404).json({message: 'Usuario no existe'});
    }
});

router.delete('/:id',async(req,res)=>{
    const deleted = await userService.deleteUser(req.params.id);
    if(deleted){
        res.status(204).send();
    }else{
        res.status(404).json({message: 'Usuario no existe'});
    }
});

module.exports = router;