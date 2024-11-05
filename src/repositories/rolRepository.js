const CrudRepository = require('../lib/crudRepository');
const Rol = require('../models/Rol');

class RolRepository extends CrudRepository{
    constructor(){
        super(Rol);
    }
    //Add any user-specific repository methods here

    async findUserByIdRol(rolId){
        const [row] = await this.pool.query(`SELECT * FROM rol r inner join users u on r.idRol=u.idRol where r.idRol = ?`,[rolId]);
        return row;
    }
}

module.exports = new RolRepository();