const CrudRepository = require('../lib/crudRepository');
const User = require('../models/User');

class UserRepository extends CrudRepository{
    constructor(){
        super(User);
    }
    //Add any user-specific repository methods here
}

module.exports = new UserRepository();