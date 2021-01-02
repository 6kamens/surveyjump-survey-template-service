module.exports = (sequelize,DataTypes)=>{
    const model = sequelize.define(
        'SurveyStyleTemplate',
        {
            title_color:{
                type:DataTypes.STRING(15)
            },
            header_color:{
                type:DataTypes.STRING(150)
            },
            background_color:{
                type:DataTypes.STRING(150)
            }
        },
        {
            tableName: 'survey_style_template',
            
        }
    );

    model.associate = models=>{
        model.belongsTo(models.SurveyTemplate,{foreignKey : {name : 'survey_id' , allowNull: false }, onDelete: 'cascade'});
    };

    return model;
}