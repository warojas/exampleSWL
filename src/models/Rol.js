class rol {
    static tableName = 'rol';

    constructor(idRol, nombre, descripcion){
        this.idRol = idRol;
        this.nombre = nombre;
        this.descripcion = descripcion;
    }
}

module.exports = rol;