const async = require('hbs/lib/async')
const {users} = require('../db/model')

async function addname(k){
    const user = await users.create({
        name: k
    })
    return user
}

async function showallusers(){
    const user = await users.findAll();
    return user
}

exports = module.exports = {
    addname,showallusers
}
