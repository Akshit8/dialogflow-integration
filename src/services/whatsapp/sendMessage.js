const axios = require('axios');
const { ZOKO_API_KEY, ZOKO_API_MESSAGE_URL } = require('../../config');

exports.sendTextMessage = async (user, msg) => {
    const headers = {
        'Content-Type': 'application/json',
        apiKey: ZOKO_API_KEY
    };
    const data = {
        channel: 'whatsapp',
        recipient: !!user && user.length > 0 ? user.substr(1) : '',
        type: 'text',
        message: msg
    };
    await axios({ method: 'post', url: ZOKO_API_MESSAGE_URL, data, headers });
};

exports.updateMessageOnZoko = async (requestBody) => {
    const headers = {
        'Content-Type': 'application/json',
        apiKey: ZOKO_API_KEY
    };
    await axios({
        method: 'put',
        url: `${ZOKO_API_MESSAGE_URL}/${requestBody.platformMessageId}/status`,
        data: requestBody,
        headers
    });
};
