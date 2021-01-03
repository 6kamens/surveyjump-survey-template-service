const db = require('../entity');

module.exports.insertMultiQuestion = async (request)=>{

    const result = await db.sequelize.transaction(async (t) => {

        const questions = await db.SurveyQuestion.bulkCreate([
            ...request
          ], {individualHooks: true , transaction: t });

          return questions ;
    });

    return result;


}