
module.exports = (sequelize,DataTypes) => {
    const model = sequelize.define(
        'SurveyHeaderTemplate',{
            id:{
                type: DataTypes.INTEGER ,
                autoIncrement:true,
                primaryKey:true
            },
            title:{
                type:DataTypes.STRING(200)
            },
            logo_image:{
                type:DataTypes.STRING(200)
            },
            background_image:{
                type:DataTypes.STRING(200)
            },
            content_body:{
                type:DataTypes.STRING()
            },
            created_date:{
                type:DataTypes.DATE,
            },
            updated_date:{
                type:DataTypes.DATE,
            }
        },{
            tableName : 'SURVEY_HEADER_TEMPLATE',
        }
    );

    
    model.associate = models=>{
        model.belongsTo(models.SurveyTemplate,{foreignKey : {name : 'survey_id' , allowNull: false} , onDelete: 'cascade'});
    };

    return model;
}