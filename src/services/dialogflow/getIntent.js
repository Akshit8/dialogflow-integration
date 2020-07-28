const dialogflow = require('dialogflow');
const { DIALOGFLOW_PROJECT_ID, DIALOGFLOW_CLIENT_EMAIL, DIALOGFLOW_PRIVATE_KEY } = require('../../config');
const { sendTextMessage } = require('../zoko/sendMessage');

exports.getIntent = async (requestBody) => {
    const { text, customer } = requestBody;
    // eslint-disable-next-line no-extra-boolean-cast
    const sessionId = !!customer ? customer.id : requestBody.platformSenderId;

    const config = {
        credentials: {
            private_key: DIALOGFLOW_PRIVATE_KEY.replace(/\\n/g, '\n'),
            client_email: DIALOGFLOW_CLIENT_EMAIL
        }
    };
    const sessionClient = new dialogflow.SessionsClient(config);
    const sessionPath = sessionClient.sessionPath(DIALOGFLOW_PROJECT_ID, sessionId);
    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text,
                languageCode: 'en-US'
            }
        }
    };
    const response = await sessionClient.detectIntent(request);
    const result = response[0].queryResult;
    const responseData = {
        recipient: requestBody.platformSenderId,
        text: await result.fulfillmentText
    };
    return responseData;
};

exports.sendSimpleReply = async (reply) => {
    sendTextMessage(reply.recipient, reply.text);
};

exports.sendProcessedReply = async (intent) => {
    // process the intent from Dialoflow
    const reply = '// TODO';
    sendTextMessage(reply.recipient, reply.text);
};
