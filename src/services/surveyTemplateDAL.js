const db = require('../entity');

module.exports.insertNewSurveyTemplate = async (request)=>{

    const result = await db.sequelize.transaction(async (t) => {

        const survey = await db.SurveyTemplate.create({
          survey_code: request.surveyCode,
          survey_type: request.surveyType,
          survey_status:request.surveyStatus,
          created_date: Date.now()
        }, { transaction: t });
    
        const header = await db.SurveyHeaderTemplate.create({
            title: request.header.title,
            logo_image:request.header.logoImage,
            background_image:request.header.backgroundImage,
            content_body :request.header.contentBody,
            created_date:Date.now(),
            survey_id :  survey.survey_id
        }, { transaction: t });

        const footer = await db.SurveyFooterTemplate.create({
            redirect_url:request.footer.redirectUrl ,
            content_body: request.footer.contentBody ,
            created_date:Date.now(),
            survey_id :  survey.survey_id
        }, { transaction: t });


        const style = await db.SurveyStyleTemplate.create({
            title_color: request.style.titleColor,
            header_color: request.style.headerColor,
            background_color:request.style.backgroundColor,
            created_date:Date.now(),
            survey_id :  survey.survey_id
        }, { transaction: t });
    
        return survey;
      });


}