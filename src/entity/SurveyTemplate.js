
module.exports = (sequelize,DataTypes)=>{
    const model = sequelize.define(
        'SurveyTemplate',{
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
            tableName : 'SURVEY_TEMPLATE',
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
                }
            ]
        }
        
    );

    model.associate = models=>{
        model.hasMany(models.SurveyQuestion,{foreignKey : {name : 'survey_id' , allowNull: false }});
        model.hasOne(models.SurveyHeaderTemplate,{foreignKey:{name:'survey_id', allowNull: false }});
        model.hasOne(models.SurveyFooterTemplate,{foreignKey:{name:'survey_id', allowNull:false}});
        model.hasOne(models.SurveyStyleTemplate,{foreignKey:{name:'survey_id', allowNull:false}});
    };

    return model;
}