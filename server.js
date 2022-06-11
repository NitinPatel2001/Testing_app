const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const {List} = require('./db/model')
const app = express()

const PORT = process.env.PORT || 4442
const dbURI = 'mongodb+srv://NitinPatel2001:Nitin1234@cluster0.u3mqn.mongodb.net/Poetry-database?retryWrites=true&w=majority';
mongoose.connect(dbURI)
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`http://localhost:${PORT}`)
    })
})
.catch((err)=>{
    console.log(err)
})

const {Routeuser} = require('./Routes/addname')
const {db} = require('./db/model')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/',express.static(path.join(__dirname+'/public')))
app.use('/api/user',Routeuser)
