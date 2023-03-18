import Sequelize from 'sequelize'
import path from 'path'
import fs from 'fs'

const basename = path.basename(__filename)
const {
    DB_HOSTNAME,
    DB_USERNAME,
    DB_PASSWORD,
    DB_PORT,
    DB_DIALECT,
    DB_NAME
} = process.env

const db ={}
const sequelizeInit = new Sequelize(
    DB_NAME,
    DB_USERNAME,
    DB_PASSWORD,{
        host : DB_HOSTNAME,
        dialect : DB_DIALECT,
        port: DB_PORT,
        timezone: '+05:30',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
          }
    }
)

fs.readdirSync(__dirname).filter(file => (file.indexOf('.')!==0 && file !== basename && file.slice(-3)=== '.js'))
.forEach(file =>{

    const model = require(path.join(__dirname,file))(sequelizeInit,Sequelize)
    db[model.name] =model
})
console.log("db",db)

db.sequelize = sequelizeInit
db.Sequelize = Sequelize
module.exports = db