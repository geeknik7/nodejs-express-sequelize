import Sequelize  from "sequelize";


const tableName = 'user'

module.exports = (sequelize, DataTypes) =>{
    const modelName = sequelize.define(tableName,
        {
            id : {
                type : DataTypes.INTEGER(30),
                autoIncrement: true,
                primaryKey:true
            },
            name:{
                type:DataTypes.STRING(50),            
                allowNull : true
            },
            email:{
                type:DataTypes.STRING(50),
                allowNull:true
            },
            password:{
                type:DataTypes.STRING(50),
                allowNull:true
            },
            createdAt: {
                field: 'created_at',
                type: DataTypes.DATE,
                defaultValue: Sequelize.fn('now')
              },
              updatedAt: {
                field: 'updated_at',
                type: DataTypes.DATE,
                defaultValue: Sequelize.fn('now')
              }
        },{
        freezeTableName: true,
        initialAutoIncrement: 1,
        timestamps: true
      })
        return modelName
}