
module.exports = (sequelize,DataTypes)=>{
    const model = sequelize.define(
        'SurveyQuestion',{
            id:{
                type: DataTypes.INTEGER ,
                autoIncrement:true,
                primaryKey:true
            },
           input_type:{
               type:DataTypes.STRING(50)
           } ,
           question:{
               type:DataTypes.STRING()
           } ,
           answer:{
             type:DataTypes.STRING()
           },
           is_required_answer:{
               type:DataTypes.BOOLEAN,
               defaultValue : false
           },
           allow_multi_answer:{
               type:DataTypes.BOOLEAN,
               defaultValue: false,
           },
           status:{
            type:DataTypes.BOOLEAN
           },
           created_date:{
               type:DataTypes.DATE,
           },
           updated_date:{
               type:DataTypes.DATE,
           }
        },{
            tableName : 'SURVEY_QUESTION',
            indexes:[
                {
                    fields:['input_type']
                },
                {
                    fields:['status']
                }
            ],

        }
    );

    model.associate = models=>{
        model.belongsTo(models.SurveyTemplate,{foreignKey : {name : 'survey_id' , allowNull: false } , onDelete: 'cascade'});
    };

    return model;
}