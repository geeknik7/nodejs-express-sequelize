import model from '../models/index'

export const sequelizeConnect = () => {
  model.sequelize.sync({
    // alter: true
  }).then(() => {
    console.log('MYSQL BOOTSTRAP :: SUCCESS')
  }).catch(error => {
    console.error(`Error connecting to database :: ${JSON.stringify(error)}`)
  })
}
