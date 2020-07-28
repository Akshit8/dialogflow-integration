const { getIntent, sendSimpleReply } = require('../services/dialogflow/getIntent');

exports.dialogFlowHandler = async (req, res, next) => {
    const intent = await getIntent(req.body);
    const result = await sendSimpleReply(intent);
    res.status(200).send(result);
    next();
};
