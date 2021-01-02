const {check , validationResult} = require('express-validator');
const surveyTemplateDAL = require('../services/surveyTemplateDAL');
const surveyQuestionDAL = require('../services/surveyQuestionDAL');
const { request } = require('express');

module.exports.surveyTemplateValidator = (method)=>{
    switch(method){
        case 'create-new-template':return [
            check('surveyType').not().isEmpty().withMessage('surveyType is required'),
            check('header.title').not().isEmpty().withMessage('header.title is required'),
            check('style.titleColor').not().isEmpty().withMessage('style.titleColor is required'),
            check('style.headerColor').not().isEmpty().withMessage('style.headerColor is required'),
            check('style.backgroundColor').not().isEmpty().withMessage('style.backgroundColor is required'),
        ];
        default:return[];
    }
}

module.exports.createNewTemplate = async (req,res)=>{
    try {

        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.json({result:false,message:result.array() });
        }

        const createSurvey = await surveyTemplateDAL.insertNewSurveyTemplate(
            {
              surveyCode : req.body.surveyCode,
              surveyType: req.body.surveyType,
              surveyStatus : true ,
              header:{
                  title: req.body.header.title,
                  logoImage: 'logo',
                  backgroundImage: 'img',
                  contentBody : req.body.header.contentBody,
              },
              footer:{
                  redirectUrl : req.body.footer.redirectUrl,
                  contentBody : req.body.footer.contentBody,
              } ,
              style:{
                  titleColor : req.body.style.titleColor,
                  headerColor: req.body.style.headerColor,
                  backgroundColor: req.body.style.backgroundColor,
              }
            }
        );

        // const insertQuestions = surveyQuestionDAL.insertMultiQuestion(res.body.questions.map((q=>{q,
        //     createdDate :
        // })));
        
        return res.json({result:true,message:'success' , data : { template: createSurvey , questions : 'dd' } });

    } catch (error) {
        return res.json({result:false,message: error.message});
    }

}