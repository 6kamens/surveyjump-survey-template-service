module.exports = (sequelize,DataTypes)=>{
    const model = sequelize.define(
        'SurveyFooterTemplate',{
            id:{
                type: DataTypes.INTEGER ,
                autoIncrement:true,
                primaryKey:true
            },
            content_body:{
                type:DataTypes.STRING()
            },
            redirect_url:{
                type:DataTypes.STRING(250)
            },
            created_date:{
                type:DataTypes.DATE,
            },
            updated_date:{
                type:DataTypes.DATE,
            }
        },{
            tableName : 'SURVEY_FOOTER_TEMPLATE',
        }
        
    );

    model.associate = models=>{
        model.belongsTo(models.SurveyTemplate,{foreignKey : {name : 'survey_id' , allowNull: false } , onDelete: 'cascade'});
    };


    return model;
}