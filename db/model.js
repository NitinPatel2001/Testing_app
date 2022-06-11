const mongoose = require('mongoose')
const Schema = mongoose.Schema

const name =  new Schema({
    name: {
        type: String,
        required: true,
    }
},{ timestamps: true })

const List = mongoose.model('user',name)
exports = module.exports = {
    List
}