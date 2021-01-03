const express = require('express');
const router = express.Router();
const surveyTemplateController = require('../controllers/surveyTemplateController');

router.post('/create-new-template',
surveyTemplateController.surveyTemplateValidator('create-new-template') ,
surveyTemplateController.createNewTemplate);


router.get('/get-survey-template/:id',
surveyTemplateController.surveyTemplateValidator('getSurveyTemplate'),
surveyTemplateController.getSurveyTemplate);

module.exports = router;