const express = require('express');
const router = express.Router();
const surveyTemplateRoute = require('./surveyTemplateRoute');

router.use('/survey-template',surveyTemplateRoute);

module.exports = router;