const rol = require('../models/Rol');
const rolRepository = require('../repositories/rolRepository');

class RolService{
    getAllRol(){
        return rolRepository.findAll();
    }

    getRolById(id){
        return rolRepository.findById(id);
    }

    createRol(rolData){
        return rolRepository.create(rolData);
    }

    updateRol(id, rolData){
        return rolRepository.update(id, rolData);
    }

    deleteRol(id){
        return rolRepository.delete(id);
    }

    async getUserByRol(rolId){
        const rol = await rolRepository.findById(rolId);
        if(!rol){
            // console.log('Rol not found');
            // return;
            throw new Error('Rol not foung');
        }

        const user = await rolRepository.findUserByIdRol(rolId);
        const userbyrol = {
            data: {
                ...rol,
                usuarios: user
            }
        }
        return userbyrol;
    }
}

module.exports = new RolService();