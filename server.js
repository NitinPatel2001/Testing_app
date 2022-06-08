const express = require('express')
const path = require('path')
const app = express()

const {Routeuser} = require('./Routes/addname')
const {db} = require('./db/model')

const PORT = process.env.PORT || 4442

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/',express.static(path.join(__dirname+'/public')))
app.use('/api/user',Routeuser)

db.sync()
.then(()=>{
    console.log("Connected")
})
.catch((err)=>{
    console.log(err)
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})