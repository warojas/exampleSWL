const express =  require('express');
const rolService = require('../services/rolService');

const router = express.Router();

router.get('/', async(req,res)=>{
    const rol = await rolService.getAllRol();
    res.json(rol);
});

router.get('/:id', async(req, res)=>{
    const rol = await rolService.getRolyId(req.params.id);
    if(rol){
        res.json(rol);
    }else{
        res.status(404).json({message: 'Rol not found'});
    }
});

router.post('/', async(req,res)=>{
    const newRol = await rolService.createRol(req.body);
    if(newRol){
        res.status(201).json(newRol);
    }else{
        res.status(404).json(newRol);
    }
});

router.put('/:id', async(req,res)=>{
    const updateRol = await rolService.updateRol(req.params.id, req.body);
    if(updateRol){
        res.json(updateRol);
    }else{
        res.status(404).json({message: 'Rol not found'});
    }
});

router.delete('/:id',async(req,res)=>{
    const deleted = await rolService.deleteRol(req.params.id);
    if(deleted){
        res.status(204).send();
    }else{
        res.status(404).json({message: 'Rol dont delete'});
    }
});

router.get('/users/:rolId', async(req, res)=>{
    try {
        const result = await rolService.getUserByRol(
            req.params.rolId
        )
        res.json(result);
    } catch (error) {
        if(error,message === 'Role not found'){
            res.status(404).json({error:error.message})
        }else{
            res.status(500).json({error:error.message})
        }
    }
})

module.exports = router;