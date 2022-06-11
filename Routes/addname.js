const Router = require('express')
const route = Router()
const {List} = require('../db/model')

route.get('/',async (req,res)=>{
    await List.find()
    .then((results)=>{
        res.send(results)
    })
    .catch((err)=>{
        console.log(err)
    })
})

route.post('/',async (req,res)=>{
    const k = req.body.name
    const name = await List({
        name: k
    })
    
    name.save()
    .then((result)=>{
        res.send(k)
    })
    .catch((err)=>{
        console.error(err)
    })
})

exports = module.exports = {
    Routeuser: route
}