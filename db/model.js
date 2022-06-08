const Sequelize = require('sequelize')

let db

if(process.env.DATABASE_URL){
    db = new Sequelize(DATABASE_URL)
}
else{
    db = new Sequelize({
        dialect: 'mysql',
        database: 'sample',
        username: 'sampleuser',
        password: 'samplepass'
    })
}

const users = db.define('user',{
    id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: Sequelize.DataTypes.STRING(30),
        allowNull: false,
    }
})

exports = module.exports = {
    db,users
}


