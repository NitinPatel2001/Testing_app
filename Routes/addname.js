const Router = require('express')
const route = Router()

const {addname,showallusers} = require('../worker/user')

route.get('/',async (req,res)=>{
    const user = await showallusers()
    res.send(user)
})

route.post('/',async (req,res)=>{
    const user = await addname(req.body.name)
    res.send(user)
})

exports = module.exports = {
    Routeuser: route
}