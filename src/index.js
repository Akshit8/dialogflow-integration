const express = require('express');
const cors = require('cors');
const multer = require('multer');
const { APP_PORT, APP_HOST } = require('./config');
const integration = require('./routes/webhook');

const app = express();

// for parsing application/json
app.use(express.json());

// for parsing application/xwww-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// for parsing multipart/form-data
app.use(multer().array());

// for enabling cors on all routes
app.use(cors());

app.get('/test', (req, res) => {
    res.send('API 1 working');
});

app.use('/integration', integration);

app.listen(+APP_PORT, APP_HOST, () => {
    console.log(`API 1 listening on http://${APP_HOST}:${APP_PORT}`);
});
