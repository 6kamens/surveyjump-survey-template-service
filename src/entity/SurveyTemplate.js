const { sequelize } = require(".");

module.exports = (sequelize,DataTypes)=>{
    const model = sequelize.define(
        'SURVEY_TEMPLATE',{
            survey_id:{
                type: DataTypes.INTEGER ,
                autoIncrement:true,
                primaryKey:true
            },
            survey_code:{
                type:DataTypes.STRING(20),
                allowNull:false
            },
            survey_type:{
                type:DataTypes.STRING(50)
            },
            survey_status:{
                type:DataTypes.BOOLEAN,
                defaultValue: true
            },
            created_date:{
                type:DataTypes.DATE,
            },
            updated_date:{
                type:DataTypes.DATE,
            }
        },{
            indexes:[
                {
                    fields:['survey_code'],
                    unique:true
                },
                {
                    fields:['survey_type']
                },
                {
                    fields:['survey_status']
                },
                {
                    fields:['created_date',{order:'DESC'}]
                },
                {
                    fields:['updated_date',{order:'DESC'}]
                }
            ]
        }
    )
}